const knex = require('../db');

const OrderItem = {
  getAll: () => knex('OrderItems').select('*'),

  getByOrderId: (orderId) => knex('OrderItems').where({ order_id: orderId }),

  create: (data) => knex('OrderItems').insert(data).returning('*'),

  update: (orderId, productId, data) =>
    knex('OrderItems')
      .where({ order_id: orderId, product_id: productId })
      .update(data)
      .returning('*'),

  delete: (orderId, productId) =>
    knex('OrderItems')
      .where({ order_id: orderId, product_id: productId })
      .del(),
};

module.exports = OrderItem;
