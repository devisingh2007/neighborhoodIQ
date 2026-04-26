const redis = require('redis');
const config = require('./env');
const logger = require('./logger');

const client = redis.createClient({
  url: config.redis.url
});

client.on('connect', () => logger.info('Redis client connecting...'));
client.on('ready', () => logger.info('Redis client connected and ready to use...'));
client.on('error', (err) => logger.error(`Redis Client Error: ${err}`));
client.on('end', () => logger.warn('Redis client disconnected'));

// Handle graceful reconnection
const connectRedis = async () => {
  try {
    await client.connect();
  } catch (error) {
    logger.error(`Could not connect to Redis: ${error.message}`);
    // In many cases, we might want to continue without Redis in dev
    if (config.env === 'production') process.exit(1);
  }
};

module.exports = {
  client,
  connectRedis
};
