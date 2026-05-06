const Area = require('../models/Area.model');
const { externalApiService, amenityService, scoreService } = require('../services');
const logger = require('../config/logger');

/**
 * Synchronize AQI and Weather for all distinct cities in the database
 */
const syncAllAreas = async () => {
  logger.info('Starting AQI and Weather synchronization...');
  try {
    const cities = await Area.distinct('city');
    logger.info(`Found ${cities.length} distinct cities to sync.`);

    for (const city of cities) {
      try {
        logger.info(`Syncing data for ${city}...`);
        const cityData = await externalApiService.fetchCityData(city);

        if (cityData) {
          const { weather, aqi, coords } = cityData;

          // Update all areas in this city
          const areasInCity = await Area.find({ city });
          for (const area of areasInCity) {
            if (aqi) area.metrics.aqi = aqi;
            if (weather) area.metrics.weather = weather;
            
            // If coordinates are missing/default, update them from weather data
            if (coords && (area.location.coordinates[0] === 0 && area.location.coordinates[1] === 0)) {
              area.location = {
                type: 'Point',
                coordinates: [coords.lon, coords.lat]
              };
            }

            // Fetch real amenity counts from Google Places if coords are valid
            if (area.location.coordinates[0] !== 0) {
              const amenities = await amenityService.fetchAmenityCounts(
                area.location.coordinates[1],
                area.location.coordinates[0]
              );
              if (amenities) {
                area.amenities = amenities;
              }
            }
            
            // Recalculate score
            const scoreResult = scoreService.calculateAreaScore(area.metrics, area.amenities);
            area.score = scoreResult.total;
            area.scoreBreakdown = scoreResult.breakdown;
            await area.save();
          }
          logger.info(`Updated ${areasInCity.length} areas in ${city}.`);
        }
      } catch (err) {
        logger.error(`Failed to sync city ${city}: ${err.message}`);
      }
    }
    logger.info('Synchronization complete.');
  } catch (error) {
    logger.error(`Sync job failed: ${error.message}`);
  }
};

module.exports = syncAllAreas;
