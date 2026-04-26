/**
 * Google Places Mapper - Normalizes raw API response
 */
const mapToFacilities = (rawData) => {
  if (!rawData || !rawData.results) {
    return [];
  }

  return rawData.results.map(place => ({
    name: place.name,
    rating: place.rating || 0,
    userRatingsTotal: place.user_ratings_total || 0,
    location: place.geometry.location,
    address: place.vicinity,
    types: place.types,
    placeId: place.place_id
  }));
};

module.exports = {
  mapToFacilities
};
