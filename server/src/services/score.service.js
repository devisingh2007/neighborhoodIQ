const NeighborhoodScore = require('../models/NeighborhoodScore.model');
const Area = require('../models/Area.model');
const AQIData = require('../models/AQIData.model');
const CrimeData = require('../models/CrimeData.model');
const { calculateWeightedScore, getGradeFromScore, normalize } = require('../utils/scoreWeights');
const logger = require('../config/logger');

/**
 * Calculate and save score for an area
 */
const calculateAreaScore = async (areaId) => {
  try {
    const area = await Area.findById(areaId);
    if (!area) return null;

    // Fetch latest data components
    const latestAQI = await AQIData.findOne({ area: areaId }).sort({ recordedAt: -1 });
    const latestCrime = await CrimeData.findOne({ area: areaId }).sort({ year: -1 });
    
    // Default/Placeholder scores if data is missing
    const scores = {
      airQuality: latestAQI ? normalize(latestAQI.aqi, 0, 300, true) : 7,
      safety: latestCrime ? normalize(latestCrime.crimeRate, 0, 5000, true) : 8,
      healthcare: 7.5, // Placeholder for Google Places logic
      education: 8.0,  // Placeholder for Google Places logic
      infrastructure: 7.0, // Placeholder
      water: 8.5, // Placeholder
      walkability: 7.5 // Placeholder for WalkScore logic
    };

    const overallScore = calculateWeightedScore(scores);
    const grade = getGradeFromScore(overallScore);

    const neighborhoodScore = await NeighborhoodScore.findOneAndUpdate(
      { area: areaId },
      {
        ...scores,
        overallScore,
        grade,
        calculatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    // Sync overallScore back to Area model for quick searching/sorting
    await Area.findByIdAndUpdate(areaId, { overallScore });

    return neighborhoodScore;
  } catch (error) {
    logger.error(`Score Calculation Error for ${areaId}: ${error.message}`);
    return null;
  }
};

module.exports = {
  calculateAreaScore,
};
