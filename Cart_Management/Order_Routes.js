// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('./order_Controller');
const authMiddleware = require('../authentication/authMiddleware');

router.post('/place', authMiddleware.verifyToken, orderController.placeOrder);
router.get('/history', authMiddleware.verifyToken, orderController.orderHistory);

module.exports = router;
