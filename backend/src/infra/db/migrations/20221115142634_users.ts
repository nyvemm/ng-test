import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.text('token');
        table.integer('accountId').notNullable().references('id').inTable('accounts');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
