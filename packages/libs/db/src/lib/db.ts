import { Pool } from 'pg';


export interface DBoptions {
    user?: string;
    host?: string;
    database?: string;
    password?: string;
    port?: number;
    connectionString?: string;
}


class DB {
    private pool: Pool

    constructor(private readonly options: DBoptions) {
        this.pool = new Pool({
            user: this.options.user,
            host: this.options.host,
            database: this.options.database,
            password: this.options.password,
            port: this.options.port,
            connectionString: this.options.connectionString
        });
    }

    async query(query: string, params?: any[]) {
        try {
            return await this.pool.query(query, params);
        } catch (error) {
            console.log(`query failed:`, query, params);
            throw error;
        }
    }

    async createTestTable() {
        const q = `CREATE TABLE IF NOT EXISTS test (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
        await this.query(q);
    }

}

export default DB;