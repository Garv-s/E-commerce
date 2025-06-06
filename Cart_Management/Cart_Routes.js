// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('./cart_Controller');
const authMiddleware = require('../authentication/authMiddleware');

router.post('/',cartController.addToCart);
router.get('/', authMiddleware.verifyToken, cartController.viewCart);
router.delete('/', authMiddleware.verifyToken, cartController.removeFromCart);

module.exports = router;
