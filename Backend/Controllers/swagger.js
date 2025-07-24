import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'E-commerce API',
    description: 'A fully fledge e-commerce app that performs basic tasks like cart management and order management'
  },
  host: 'localhost:5000'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);