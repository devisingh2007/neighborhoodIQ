const Area = require('../models/Area.model');
const aqiService = require('../services/aqi.service');
const scoreService = require('../services/score.service');
const logger = require('../config/logger');

/**
 * Sync AQI for all active areas and recalculate scores
 */
const syncAQIJob = async () => {
  logger.info('Starting scheduled AQI Sync Job...');
  try {
    const areas = await Area.find({ isActive: true });
    logger.info(`Syncing data for ${areas.length} areas`);

    for (const area of areas) {
      await aqiService.syncAQIData(area._id);
      await scoreService.calculateAreaScore(area._id);
    }

    logger.info('AQI Sync Job completed successfully');
  } catch (error) {
    logger.error(`AQI Sync Job Error: ${error.message}`);
  }
};

module.exports = syncAQIJob;
