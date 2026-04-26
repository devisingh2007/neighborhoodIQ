const axios = require('axios');
const config = require('../../config/env');
const logger = require('../../config/logger');

/**
 * FBI Crime Data API Client
 */
const getCrimeStats = async (stateAbbr, year) => {
  try {
    const response = await axios.get(`https://api.crime-data-explorer.fr.cloud.gov/api/crime`, {
      params: {
        state_id: stateAbbr,
        year: year,
        api_key: config.apiKeys.fbi
      }
    });
    return response.data;
  } catch (error) {
    logger.error(`FBI Client Error: ${error.message}`);
    return null;
  }
};

module.exports = {
  getCrimeStats
};
