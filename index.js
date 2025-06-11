import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Server from './Routes/server.js';
const app = express();
app.use('/api',Server);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
