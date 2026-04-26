const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const corsOptions = require('./config/cors');
const httpStatus = require('./constants/httpStatus');
const requestLogger = require('./middleware/requestLogger.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');
const routes = require('./routes/v1');

const app = express();

// Global Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Basic Health Check
app.get('/health', (req, res) => {
  res.status(httpStatus.OK).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// API v1 routes
app.use('/api/v1', routes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
