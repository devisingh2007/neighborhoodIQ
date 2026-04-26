const messages = {
  // Auth
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  UNAUTHORIZED_ACCESS: 'Unauthorized access',
  FORBIDDEN_ACCESS: 'Access forbidden',
  LOGOUT_SUCCESS: 'Logged out successfully',
  TOKEN_EXPIRED: 'Token expired',
  TOKEN_INVALID: 'Invalid token',

  // Areas
  AREA_NOT_FOUND: 'Area not found',
  AREA_CREATED: 'Area created successfully',
  AREA_UPDATED: 'Area updated successfully',
  AREA_DELETED: 'Area deleted successfully',

  // Reviews
  REVIEW_NOT_FOUND: 'Review not found',
  REVIEW_CREATED: 'Review created successfully',
  REVIEW_UPDATED: 'Review updated successfully',
  REVIEW_DELETED: 'Review deleted successfully',

  // General
  INTERNAL_SERVER_ERROR: 'Internal server error',
  BAD_REQUEST: 'Bad request',
  VALIDATION_ERROR: 'Validation error',
  RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later'
};

module.exports = messages;
