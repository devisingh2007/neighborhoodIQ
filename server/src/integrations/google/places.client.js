const axios = require('axios');
const config = require('../../config/env');
const logger = require('../../config/logger');

/**
 * Google Places API Client
 */
const searchNearby = async (lat, lng, radius, type) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        location: `${lat},${lng}`,
        radius: radius,
        type: type,
        key: config.apiKeys.googlePlaces
      }
    });
    return response.data;
  } catch (error) {
    logger.error(`Google Places Client Error: ${error.message}`);
    return null;
  }
};

module.exports = {
  searchNearby
};
