// models/productModel.js
const knex = require('../db');

exports.createProduct = (product) => knex('Products').insert(product).returning('*');

exports.getAllProducts = () => knex('Products').select('*');

exports.getProductById = (id) => knex('Products').where({ id }).first();

exports.updateProduct = (id, product) => knex('Products').where({ id }).update(product).returning('*');

exports.deleteProduct = (id) => knex('Products').where({ id }).del();
