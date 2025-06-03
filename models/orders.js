const knex = require('../db');

const Order = {
  getAll: () => knex('Orders').select('*'),

  getById: (id) => knex('Orders').where({ id }).first(),

  create: (data) => knex('Orders').insert(data).returning('*'),

  update: (id, data) => knex('Orders').where({ id }).update(data).returning('*'),

  delete: (id) => knex('Orders').where({ id }).del(),
};

module.exports = Order;
