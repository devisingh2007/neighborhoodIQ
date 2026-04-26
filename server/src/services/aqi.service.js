const AQIData = require('../models/AQIData.model');
const openaqClient = require('../integrations/openaq/openaq.client');
const openaqMapper = require('../integrations/openaq/openaq.mapper');
const Area = require('../models/Area.model');

const syncAQIData = async (areaId) => {
  const area = await Area.findById(areaId);
  if (!area) return null;

  const rawData = await openaqClient.getLatestMeasurements(
    area.location.coordinates[1],
    area.location.coordinates[0]
  );
  
  const aqiData = openaqMapper.mapToAQIData(areaId, rawData);
  if (aqiData) {
    return AQIData.create(aqiData);
  }
  return null;
};

module.exports = { syncAQIData };
