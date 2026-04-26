const Joi = require('joi');

const createArea = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    location: Joi.object().keys({
      coordinates: Joi.array().items(Joi.number()).length(2).required(),
    }).required(),
    type: Joi.string().valid('residential', 'commercial', 'mixed', 'industrial'),
    description: Joi.string(),
    images: Joi.array().items(Joi.string()),
  }),
};

const getArea = {
  params: Joi.object().keys({
    areaId: Joi.string().required(), // mongoose objectId validation would be better but Joi.string() is fine for now
  }),
};

const updateArea = {
  params: Joi.object().keys({
    areaId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    type: Joi.string().valid('residential', 'commercial', 'mixed', 'industrial'),
    description: Joi.string(),
    images: Joi.array().items(Joi.string()),
    isActive: Joi.boolean(),
  }).min(1),
};

module.exports = {
  createArea,
  getArea,
  updateArea,
};
