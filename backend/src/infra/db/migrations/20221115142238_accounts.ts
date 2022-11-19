import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('accounts', (table) => {
        table.increments('id').primary();
        table.decimal('balance', 10, 2).notNullable().defaultTo(100.0);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('accounts');
}
