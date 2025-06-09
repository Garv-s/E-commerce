// models/productModel.js
const knex = require('../db');

exports.createProduct = (product) => knex('products').insert(product).returning('*');

exports.getAllProducts = () => knex('products').select('*');

exports.getProductById = (id) => knex('products').where({ id }).first();

exports.getProductByCat = (category) => knex('products').where( 'category',category );;

exports.updateProduct = (id, product) => knex('products').where({ id }).update(product).returning('*');

exports.deleteProduct = (id) => knex('products').where({ id }).del();
