import type { Knex } from 'knex';

const config: Knex.Config = {
    client: 'pg',
    connection: {
        port: 5432,
        database: 'backend',
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    pool: {
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER,
        acquireTimeoutMillis: Number.MAX_SAFE_INTEGER,
    },
};

module.exports = config;
