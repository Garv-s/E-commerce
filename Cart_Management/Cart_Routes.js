// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('./cart_Controller');
const authMiddleware = require('../authentication/authMiddleware');

router.post('/add', authMiddleware.verifyToken, cartController.addToCart);
router.get('/', authMiddleware.verifyToken, cartController.viewCart);

module.exports = router;
