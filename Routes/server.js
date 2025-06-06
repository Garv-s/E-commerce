require('dotenv').config();
const express = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./ProductRoutes');
const cartRoutes = require('./Cart_Routes');
const orderRoutes = require('./Order_Routes');
const authMiddleware = require('../Controllers/auth/authMiddleware');
const Razorpay = require('razorpay');

const app = express();

app.use(express.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/products', authMiddleware.verifyToken,  productRoutes);
app.use('/api/cart', authMiddleware.verifyToken,  cartRoutes);
app.use('/api/order', authMiddleware.verifyToken,  orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
