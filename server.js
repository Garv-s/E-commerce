require('dotenv').config();
const express = require('express');
const authRoutes = require('./authentication/authRoutes');
const productRoutes = require('./Product_Management/ProductRoutes');
const cartRoutes = require('./Cart_Management/cartRoutes');
const orderRoutes = require('./Order_Management/orderRoutes');

const app = express();

app.use(express.json()); // Parse JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
