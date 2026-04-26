const Joi = require('joi');

const createReview = {
  body: Joi.object().keys({
    area: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
    title: Joi.string().required().max(100),
    content: Joi.string().required().max(1000),
    pros: Joi.array().items(Joi.string()),
    cons: Joi.array().items(Joi.string()),
    images: Joi.array().items(Joi.string()),
  }),
};

const updateReview = {
  params: Joi.object().keys({
    reviewId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    rating: Joi.number().min(1).max(5),
    title: Joi.string().max(100),
    content: Joi.string().max(1000),
    pros: Joi.array().items(Joi.string()),
    cons: Joi.array().items(Joi.string()),
  }).min(1),
};

module.exports = {
  createReview,
  updateReview,
};
