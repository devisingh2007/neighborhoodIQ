const axios = require('axios');
const config = require('../../config/env');
const logger = require('../../config/logger');

/**
 * OpenAQ API Client
 */
const getLatestMeasurements = async (lat, lng, radius = 5000) => {
  try {
    const response = await axios.get('https://api.openaq.org/v3/latest', {
      params: {
        coordinates: `${lat},${lng}`,
        radius: radius,
        limit: 10,
        has_geo: true
      },
      headers: {
        'X-API-Key': config.apiKeys.openAQ
      }
    });
    return response.data;
  } catch (error) {
    logger.error(`OpenAQ Client Error: ${error.message}`);
    return null;
  }
};

module.exports = {
  getLatestMeasurements
};
