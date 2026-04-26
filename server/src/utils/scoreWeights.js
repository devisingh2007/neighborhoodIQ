const scoreFactors = require('../constants/scoreFactors');

/**
 * Normalizes a value between 0 and 10
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @param {boolean} inverse If true, lower values are better (e.g. crime rate, AQI)
 * @returns {number}
 */
const normalize = (value, min, max, inverse = false) => {
  if (value <= min) return inverse ? 10 : 0;
  if (value >= max) return inverse ? 0 : 10;
  
  const normalized = ((value - min) / (max - min)) * 10;
  return inverse ? 10 - normalized : normalized;
};

/**
 * Calculate Weighted Score
 * @param {object} scores Object containing individual metric scores (0-10)
 * @returns {number}
 */
const calculateWeightedScore = (scores) => {
  const { WEIGHTS } = scoreFactors;
  
  const total = 
    (scores.safety || 0) * WEIGHTS.SAFETY +
    (scores.airQuality || 0) * WEIGHTS.AIR_QUALITY +
    (scores.healthcare || 0) * WEIGHTS.HEALTHCARE +
    (scores.education || 0) * WEIGHTS.EDUCATION +
    (scores.infrastructure || 0) * WEIGHTS.INFRASTRUCTURE +
    (scores.water || 0) * WEIGHTS.WATER +
    (scores.walkability || 0) * WEIGHTS.WALKABILITY;
    
  return Math.round(total * 10) / 10; // Round to 1 decimal place
};

/**
 * Get Grade based on overall score
 * @param {number} score 
 * @returns {string}
 */
const getGradeFromScore = (score) => {
  const { GRADES } = scoreFactors;
  if (score >= 9) return GRADES.EXCELLENT;
  if (score >= 7.5) return GRADES.GOOD;
  if (score >= 5.5) return GRADES.AVERAGE;
  if (score >= 4) return GRADES.FAIR;
  return GRADES.POOR;
};

module.exports = {
  normalize,
  calculateWeightedScore,
  getGradeFromScore
};
