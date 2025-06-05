/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_orders', function(table) {
    table.increments('id').primary(); // SERIAL PRIMARY KEY
    table.integer('user_id').unsigned().notNullable();
    table.decimal('total',10,2).notNullable();
    table.string('status').notNullable().defaultTo('placed');
    table.string('shipping_address').notNullable(); 
    table.string('payment_method').notNullable();
    table.timestamp('ordered_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
  
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_orders');
  
};
