// models/productModel.js
import knex from '../../db.js';

const createProduct = (product) => knex('products').insert(product).returning('*');

const getAllProducts = () => knex('products').select('*');

const getProductById = (id) => knex('products').where({ id }).first();

const getProductByCat = (category) => knex('products').where( 'category',category );;

const updateProduct = (id, product) => knex('products').where({ id }).update(product).returning('*');

const deleteProduct = (id) => knex('products').where({ id }).del();

export default {
    createProduct,
    getAllProducts,
    getProductByCat,
    getProductById,
    updateProduct,
    deleteProduct
}
