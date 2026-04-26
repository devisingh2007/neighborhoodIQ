const jwt = require('jsonwebtoken');
const config = require('../config/env');

/**
 * Generate Access Token
 * @param {string} userId 
 * @returns {string}
 */
const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });
};

/**
 * Generate Refresh Token
 * @param {string} userId 
 * @returns {string}
 */
const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwt.secret, {
    expiresIn: '30d' // Long lived refresh token
  });
};

/**
 * Verify Token
 * @param {string} token 
 * @returns {object}
 */
const verifyToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
};
