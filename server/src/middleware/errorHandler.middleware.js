const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');
const logger = require('../config/logger');
const config = require('../config/env');

/**
 * Standardized Global Error Handler
 */
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  if (!statusCode) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = messages.INTERNAL_SERVER_ERROR;
  }

  res.locals.errorMessage = err.message;

  const response = {
    success: false,
    statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = errorHandler;
