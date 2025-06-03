require('dotenv').config();
const express = require('express');
const authRoutes = require('./authentication/authRoutes');
const productRoutes = require('./Product_Management/ProductRoutes');

const app = express();

app.use(express.json()); // Parse JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
