const User = require('../models/User.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');

/**
 * Register a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const registerUser = async (userBody) => {
  if (await User.findOne({ email: userBody.email })) {
    throw new ApiError(httpStatus.BAD_REQUEST, messages.EMAIL_ALREADY_EXISTS);
  }
  return User.create(userBody);
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, messages.INVALID_CREDENTIALS);
  }
  return user;
};

module.exports = {
  registerUser,
  loginUserWithEmailAndPassword,
};
