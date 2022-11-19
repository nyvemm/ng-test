import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('transactions', (table) => {
        table.increments('id').primary();
        table.integer('debitedAccountId').notNullable().references('id').inTable('accounts');
        table.integer('creditedAccountId').notNullable().references('id').inTable('accounts');
        table.decimal('value', 10, 2).notNullable();
        table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('transactions');
}
