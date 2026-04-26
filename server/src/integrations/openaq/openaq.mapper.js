/**
 * OpenAQ Mapper - Normalizes raw API response to AQIData model format
 */
const mapToAQIData = (areaId, rawData) => {
  if (!rawData || !rawData.results || rawData.results.length === 0) {
    return null;
  }

  const latest = rawData.results[0]; // Take the nearest or most recent
  
  // Find specific parameters if they exist
  const findParam = (code) => {
    const sensor = latest.sensors.find(s => s.parameter.code === code);
    return sensor ? sensor.value : null;
  };

  // Simplified AQI calculation or mapping from raw value
  // In a real app, use a proper AQI formula based on PM2.5 etc.
  const pm25 = findParam('pm25');
  const aqiValue = pm25 ? Math.round(pm25 * 2) : 50; // Mock calculation

  const getCategory = (aqi) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  };

  return {
    area: areaId,
    aqi: aqiValue,
    pm25: pm25,
    pm10: findParam('pm10'),
    o3: findParam('o3'),
    no2: findParam('no2'),
    so2: findParam('so2'),
    co: findParam('co'),
    category: getCategory(aqiValue),
    recordedAt: latest.datetime || new Date(),
    source: 'OpenAQ'
  };
};

module.exports = {
  mapToAQIData
};
