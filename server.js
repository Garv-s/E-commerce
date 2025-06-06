//require('dotenv').config();
const express = require('express');
const authRoutes = require('./authentication/authRoutes');
const productRoutes = require('./Product_Management/ProductRoutes');
const cartRoutes = require('./Cart_Management/Cart_Routes');
const orderRoutes = require('./Cart_Management/Order_Routes');

const app = express();

app.use(express.json()); // Parse JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
