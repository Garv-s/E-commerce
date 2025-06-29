/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cart_items', function(table) {
    table.increments('id').primary(); // SERIAL PRIMARY KEY
    table.integer('user_id').unsigned().notNullable();
    table.integer('product_id').notNullable();
    table.integer('quantity').notNullable(); 
    table.timestamp('added_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cart_items');
  
};
