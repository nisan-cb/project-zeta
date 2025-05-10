# db

The `db` library provides a simple and efficient way to interact with a PostgreSQL database in a Node.js environment. It is built using the `pg` library, a popular PostgreSQL client for Node.js, and is designed to simplify database connection management and query execution.

This library is particularly useful for applications that require a clean abstraction over database operations, such as querying, connection pooling, and configuration management.

## Features

- **Connection Pooling**: Efficiently manage database connections using `pg.Pool`.
- **Query Execution**: Easily execute SQL queries with parameterized inputs.
- **Customizable Configuration**: Supports flexible database connection options, including user, host, database, password, port, and connection strings.
- **Error Logging**: Provides basic error logging for failed queries to aid in debugging.




# scripts 

### Building

Run `nx build db` to build the library.

### Running unit tests

Run `nx test db` to execute the unit tests via [Jest](https://jestjs.io).
