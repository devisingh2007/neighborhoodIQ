const scoreFactors = {
  WEIGHTS: {
    SAFETY: 0.30,
    AIR_QUALITY: 0.20,
    HEALTHCARE: 0.15,
    EDUCATION: 0.15,
    INFRASTRUCTURE: 0.10,
    WATER: 0.05,
    WALKABILITY: 0.05
  },
  GRADES: {
    EXCELLENT: 'A+',
    GOOD: 'A',
    AVERAGE: 'B',
    FAIR: 'C',
    POOR: 'D'
  }
};

module.exports = scoreFactors;
