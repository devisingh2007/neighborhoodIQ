const { client } = require('../config/redis');
const logger = require('../config/logger');

/**
 * Cache Middleware using Redis
 * @param {number} ttl Time to live in seconds
 */
const cache = (ttl = 3600) => async (req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }

  const key = `cache:${req.originalUrl}`;

  try {
    if (!client.isOpen) {
      return next();
    }

    const cachedData = await client.get(key);
    if (cachedData) {
      logger.debug(`Cache hit for ${req.originalUrl}`);
      return res.status(200).json(JSON.parse(cachedData));
    }

    // Override res.json to cache the response
    const originalJson = res.json;
    res.json = function(data) {
      res.json = originalJson;
      if (res.statusCode === 200) {
        client.setEx(key, ttl, JSON.stringify(data)).catch(err => logger.error(`Redis set error: ${err}`));
      }
      return res.json(data);
    };

    next();
  } catch (error) {
    logger.error(`Cache middleware error: ${error.message}`);
    next();
  }
};

module.exports = cache;
