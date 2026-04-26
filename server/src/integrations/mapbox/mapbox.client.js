const axios = require('axios');
const config = require('../../config/env');
const logger = require('../../config/logger');

/**
 * Mapbox API Client for Geocoding
 */
const forwardGeocode = async (query) => {
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`, {
      params: {
        access_token: config.apiKeys.mapbox,
        limit: 1
      }
    });
    return response.data;
  } catch (error) {
    logger.error(`Mapbox Client Error: ${error.message}`);
    return null;
  }
};

module.exports = {
  forwardGeocode
};
