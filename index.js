import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './Routes/routes.js';
const app = express();
app.use('/api',routes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
