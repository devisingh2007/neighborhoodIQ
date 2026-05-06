const cron = require('node-cron');
const syncAllAreas = require('./syncAqi.job');
const logger = require('../config/logger');

const setupJobs = () => {
  // Run every hour
  cron.schedule('0 * * * *', () => {
    logger.info('Running hourly AQI sync job...');
    syncAllAreas();
  });

  logger.info('Background jobs scheduled.');
};

module.exports = setupJobs;
