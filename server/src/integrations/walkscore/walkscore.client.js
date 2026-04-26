const axios = require('axios');
const config = require('../../config/env');
const logger = require('../../config/logger');

/**
 * Walk Score API Client
 */
const getWalkScore = async (lat, lng, address) => {
  try {
    const response = await axios.get('https://api.walkscore.com/score', {
      params: {
        format: 'json',
        lat: lat,
        lon: lng,
        address: address,
        wsapikey: config.apiKeys.walkScore
      }
    });
    return response.data;
  } catch (error) {
    logger.error(`Walk Score Client Error: ${error.message}`);
    return null;
  }
};

module.exports = {
  getWalkScore
};
