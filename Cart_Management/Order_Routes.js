// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('./order_Controller');
const authMiddleware = require('../authentication/authMiddleware');

router.post('/', orderController.placeOrder);
router.get('/', orderController.orderHistory);

module.exports = router;
