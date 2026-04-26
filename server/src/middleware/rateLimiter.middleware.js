const { client } = require('../config/redis');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');
const logger = require('../config/logger');

/**
 * Rate Limiter Middleware using Redis
 * @param {number} limit Max requests
 * @param {number} window Seconds
 */
const rateLimiter = (limit = 100, window = 60) => async (req, res, next) => {
  const ip = req.ip;
  const key = `ratelimit:${ip}`;

  try {
    // If Redis is not connected, skip rate limiting (fail open in dev)
    if (!client.isOpen) {
      return next();
    }

    const current = await client.get(key);
    
    if (current && parseInt(current) >= limit) {
      return next(new ApiError(httpStatus.TOO_MANY_REQUESTS, messages.RATE_LIMIT_EXCEEDED));
    }

    const multi = client.multi();
    multi.incr(key);
    multi.expire(key, window);
    await multi.exec();

    next();
  } catch (error) {
    logger.error(`Rate limiter error: ${error.message}`);
    next();
  }
};

module.exports = rateLimiter;
