/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
    table.increments('id').primary(); // SERIAL PRIMARY KEY
    table.string('name', 100).notNullable;
    table.integer('quantity');
    table.decimal('price',10,2).notNullable;
    table.string('category', 100);
    table.string('seller', 100);
    table.string('image_url');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
  
};

