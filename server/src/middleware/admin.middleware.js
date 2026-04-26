const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');

/**
 * Middleware to restrict access to admins only
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, messages.UNAUTHORIZED_ACCESS));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(httpStatus.FORBIDDEN, messages.FORBIDDEN_ACCESS));
    }
    next();
  };
};

module.exports = { authorize };
