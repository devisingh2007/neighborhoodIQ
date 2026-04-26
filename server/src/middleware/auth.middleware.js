const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const User = require('../models/User.model');
const config = require('../config/env');
const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');

/**
 * Middleware to protect routes - ensures user is authenticated
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, messages.UNAUTHORIZED_ACCESS));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret);

    // Get user from the token
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, messages.USER_NOT_FOUND));
    }

    next();
  } catch (err) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, messages.TOKEN_INVALID));
  }
});

module.exports = { protect };
