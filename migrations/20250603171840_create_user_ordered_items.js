/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_order_items', function(table) {
    table.increments('id').primary(); // SERIAL PRIMARY KEY
    table.integer('order_id').unsigned().notNullable();
    table.integer('product_id').notNullable();
    table.integer('quantity').notNullable(); 
    table.decimal('price',10,2).notNullable();

    table.foreign('order_id').references('id').inTable('user_orders').onDelete('CASCADE');
    table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_order_items');
};
