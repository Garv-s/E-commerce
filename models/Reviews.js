const knex = require('../db');

const Review = {
  getAll: () => knex('Reviews').select('*'),

  getByProductId: (productId) => knex('Reviews').where({ product_id: productId }),

  create: (data) => knex('Reviews').insert(data).returning('*'),

  update: (id, data) => knex('Reviews').where({ id }).update(data).returning('*'),

  delete: (id) => knex('Reviews').where({ id }).del(),
};

module.exports = Review;
