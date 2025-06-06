require('dotenv').config();
const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const productRoutes = require('./ProductRoutes');
const cartRoutes = require('./Cart_Routes');
const orderRoutes = require('./Order_Routes');
const authMiddleware = require('../Controllers/auth/authMiddleware');
const Razorpay = require('razorpay');

router.use(express.json()); 

router.use('/auth', authRoutes);
router.use('/products', authMiddleware.verifyToken,  productRoutes);
router.use('/cart', authMiddleware.verifyToken,  cartRoutes);
router.use('/order', authMiddleware.verifyToken,  orderRoutes);
module.exports = router;
