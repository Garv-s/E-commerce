require('dotenv').config();
const express = require('express');
const Server = require('./Routes/server');
const app = express();
app.use('/api',Server);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
