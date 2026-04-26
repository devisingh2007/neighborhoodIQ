const Joi = require('joi');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');

/**
 * Middleware to validate request data against a Joi schema
 * @param {object} schema Joi schema object containing body, params, or query
 */
const validate = (schema) => (req, res, next) => {
  const validSchema = {};
  
  // Pick only relevant parts from req based on what's defined in the schema
  ['params', 'query', 'body'].forEach((key) => {
    if (schema[key]) {
      validSchema[key] = schema[key];
    }
  });

  const object = {};
  ['params', 'query', 'body'].forEach((key) => {
    if (schema[key]) {
      object[key] = req[key];
    }
  });

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }

  // Update req with validated/sanitized values
  Object.assign(req, value);
  return next();
};

module.exports = validate;
