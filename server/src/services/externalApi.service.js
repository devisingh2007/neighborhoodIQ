const axios = require('axios');
const config = require('../config/env');
const logger = require('../config/logger');

/**
 * Fetch weather and AQI data for a city using OpenWeatherMap (Primary)
 * and Open-Meteo (Fallback) as per the provided code.
 * @param {string} city
 * @returns {Promise<Object>}
 */
const fetchCityData = async (city) => {
  try {
    // 1. Fetch Current Weather from OpenWeatherMap
    const weatherRes = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${city},IN`,
        appid: config.apiKeys.openweather,
        units: 'metric',
      },
    });

    const weatherData = weatherRes.data;
    const { lat, lon } = weatherData.coord;

    // 2. Fetch Air Pollution from OpenWeatherMap
    const aqiRes = await axios.get('https://api.openweathermap.org/data/2.5/air_pollution', {
      params: {
        lat,
        lon,
        appid: config.apiKeys.openweather,
      },
    });

    const aqiData = aqiRes.data.list[0];

    return {
      weather: {
        temp: weatherData.main.temp,
        condition: weatherData.weather[0].main,
        lastUpdated: new Date(),
      },
      aqi: {
        value: aqiData.main.aqi, // 1-5 scale (OpenWeatherMap)
        parameter: 'aqi',
        lastUpdated: new Date(),
        components: aqiData.components
      },
      coords: { lat, lon }
    };
  } catch (error) {
    logger.warn(`OpenWeatherMap failed for ${city}, trying fallback...`);
    return await fetchFallbackData(city);
  }
};

/**
 * Fallback to Google Geocoding or Open-Meteo for location data
 */
const fetchFallbackData = async (city) => {
  try {
    let latitude, longitude;

    if (config.apiKeys.google) {
      // Try Google Geocoding
      const googleRes = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: `${city}, India`,
          key: config.apiKeys.google
        }
      });

      if (googleRes.data.results && googleRes.data.results.length > 0) {
        const location = googleRes.data.results[0].geometry.location;
        latitude = location.lat;
        longitude = location.lng;
        logger.info(`Google Geocoding successful for ${city}`);
      }
    }

    if (!latitude) {
      // Fallback to Open-Meteo
      const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
        params: { name: city, count: 1 }
      });

      if (!geoRes.data.results || geoRes.data.results.length === 0) {
        throw new Error('City not found in location services');
      }

      latitude = geoRes.data.results[0].latitude;
      longitude = geoRes.data.results[0].longitude;
    }

    // Now get weather from Open-Meteo
    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,weather_code',
        timezone: 'auto'
      }
    });

    const current = weatherRes.data.current;

    return {
      weather: {
        temp: current.temperature_2m,
        condition: getWeatherFromCode(current.weather_code),
        lastUpdated: new Date(),
      },
      aqi: null,
      coords: { lat: latitude, lon: longitude }
    };
  } catch (error) {
    logger.error(`Fallback failed for ${city}: ${error.message}`);
    return null;
  }
};

/**
 * Helper to map Open-Meteo codes to conditions
 */
function getWeatherFromCode(code) {
  if (code === 0) return 'Clear';
  if (code <= 3) return 'Clouds';
  if (code <= 48) return 'Fog';
  if (code <= 55) return 'Drizzle';
  if (code <= 65) return 'Rain';
  if (code <= 82) return 'Showers';
  return 'Clouds';
}

module.exports = {
  fetchCityData,
  // Keep individual exports for compatibility if needed
  fetchLatestAqi: async (city) => (await fetchCityData(city))?.aqi,
  fetchCurrentWeather: async (city) => (await fetchCityData(city))?.weather,
};
