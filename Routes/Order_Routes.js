// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/Order/order_Controller');

router.post('/', orderController.placeOrder);
router.get('/', orderController.orderHistory);

module.exports = router;
