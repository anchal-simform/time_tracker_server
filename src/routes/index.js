const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const projectRoutes = require('./project.routes');
const taskRoutes = require('./task.routes');
const timeLogsRoutes = require('./timeLogs.routes');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefination = {
  openapi: '3.0.0',
  info: {
    version: '1.0',
    title: 'Time tracker Api',
    description: 'List of Time tracker Api'
  },
  servers: [
    { url: 'http://localhost:4090', description: 'Local server' }
    // { url: 'http://35.180.120.109:3423', description: 'Dev server' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
    }
  },
  consumes: ['application/json'],
  produces: ['application/json']
};

const options = {
  swaggerDefinition: swaggerDefination,
  apis: ['./src/routes/*.routes.js']
};

const specs = swaggerJsdoc(options);

/***
 * @description - The route end Point for the api-docs
 */

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

router.use('/auth', authRoutes);

router.use('/projects', projectRoutes);

router.use('/tasks', taskRoutes);

router.use('/time-logs', timeLogsRoutes);

module.exports = router;
