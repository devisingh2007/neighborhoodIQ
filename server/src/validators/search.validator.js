const Joi = require('joi');

const searchAreas = {
  query: Joi.object().keys({
    q: Joi.string(),
    city: Joi.string(),
    type: Joi.string().valid('residential', 'commercial', 'mixed', 'industrial'),
    minScore: Joi.number().min(0).max(10),
    maxPrice: Joi.string(), // can be more specific if needed
    sortBy: Joi.string().valid('overallScore', 'name', 'createdAt', 'population'),
    order: Joi.string().valid('asc', 'desc'),
    page: Joi.number().integer().min(1),
    limit: Joi.number().integer().min(1).max(100),
  }),
};

const nearbyAreas = {
  query: Joi.object().keys({
    lat: Joi.number().required().min(-90).max(90),
    lng: Joi.number().required().min(-180).max(180),
    radius: Joi.number().min(1).max(100), // in km
    limit: Joi.number().integer().min(1).max(50),
  }),
};

module.exports = {
  searchAreas,
  nearbyAreas,
};
