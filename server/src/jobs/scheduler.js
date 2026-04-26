const cron = require('node-cron');
const syncAQIJob = require('./syncAQI.job');
const logger = require('../config/logger');

const initScheduler = () => {
  logger.info('Initializing job scheduler...');

  // Sync AQI Daily at 2 AM
  cron.schedule('0 2 * * *', () => {
    syncAQIJob();
  });

  // Add more schedules here as needed
  // cron.schedule('0 4 * * *', recalculateScoresJob);
};

module.exports = initScheduler;
