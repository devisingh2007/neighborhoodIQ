const axios = require('axios');
const config = require('../config/env');
const logger = require('../config/logger');

/**
 * Fetch counts of various amenities near a location using Google Places API
 * @param {number} lat 
 * @param {number} lon 
 * @param {number} radius - search radius in meters (default 3km)
 * @returns {Promise<Object>}
 */
const fetchAmenityCounts = async (lat, lon, radius = 3000) => {
  if (!config.apiKeys.google) {
    logger.warn('Google API Key missing, skipping amenity fetch');
    return null;
  }

  const types = {
    hospitals: ['hospital', 'health'],
    schools: ['school', 'university'],
    transitHubs: ['transit_station', 'subway_station', 'bus_station', 'train_station']
  };

  const counts = {
    hospitals: 0,
    schools: 0,
    transitHubs: 0
  };

  try {
    for (const [key, googleTypes] of Object.entries(types)) {
      // Note: Google Nearby Search only allows one type per request, 
      // but we can combine or just use the most prominent one, 
      // or make multiple requests. For simplicity and quota, we use the primary type.
      
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          location: `${lat},${lon}`,
          radius: radius,
          type: googleTypes[0],
          key: config.apiKeys.google
        }
      });

      if (response.data.status === 'OK') {
        counts[key] = response.data.results.length;
        // Google returns max 20 results per page, which is a good indicator of density
      } else if (response.data.status === 'ZERO_RESULTS') {
        counts[key] = 0;
      } else {
        logger.error(`Google Places error (${key}): ${response.data.status} - ${response.data.error_message || ''}`);
      }
    }

    return counts;
  } catch (error) {
    logger.error(`Amenity fetch failed: ${error.message}`);
    return null;
  }
};

module.exports = {
  fetchAmenityCounts,
};
