import DB, { DBoptions } from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const dbParams: DBoptions = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT ?? '', 10),
    user: process.env.DB_USER,
};

describe('db connection', () => {
    let db: DB;

    beforeAll(() => {
        console.log("here")
        db = new DB(dbParams);
    });

    it('should establish a connection without errors', async () => {
        expect(() => new DB(dbParams)).not.toThrow();
    });

    it('should create a test table', async () => {
        await db.createTestTable();
        const result = await db.query(`SELECT to_regclass('public.test')`);
        expect(result?.rows[0].to_regclass).toBe('test');
    });

    it('should insert and retrieve data from the test table', async () => {
        await db.query(`INSERT INTO test DEFAULT VALUES`);
        const result = await db['query'](`SELECT * FROM test`);
        expect(result?.rows.length).toBeGreaterThan(0);
    });

    it('should handle invalid queries gracefully', async () => {
        const invalidQuery = `SELECT * FROM non_existent_table`;
        let result;
        try {
            result = await db.query(invalidQuery);
        } catch (error) {
            result = undefined;
        }
        expect(result).toBeUndefined();
    });

    afterAll(async () => {
        await db.query(`DROP TABLE IF EXISTS test`);
    });
});
