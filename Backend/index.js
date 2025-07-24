import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './Routes/routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger-output.json' assert { type: 'json' };


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api',routes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
