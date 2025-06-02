/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {
    table.increments('id').primary(); // SERIAL PRIMARY KEY
    table.integer('user_id').unsigned().notNullable();
    table.decimal('total_amount', 10, 2).notNullable();
    table.string('status').notNullable().defaultTo('pending'); // e.g., pending, shipped, delivered, cancelled
    table.string('shipping_address').notNullable();
    table.string('billing_address');
    table.timestamp('order_date').defaultTo(knex.fn.now());
    table.timestamps(true, true);

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTableIfExists('orders');
  
};
