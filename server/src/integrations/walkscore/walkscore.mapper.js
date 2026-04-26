/**
 * Walk Score Mapper
 */
const mapToWalkability = (rawData) => {
  if (!rawData || rawData.status !== 1) {
    return null;
  }

  return {
    walkScore: rawData.walkscore || 0,
    transitScore: rawData.transit ? rawData.transit.score : null,
    bikeScore: rawData.bike ? rawData.bike.score : null,
    description: rawData.description,
    summary: rawData.snapped_lat ? `Walk Score: ${rawData.walkscore}` : 'No score available'
  };
};

module.exports = {
  mapToWalkability
};
