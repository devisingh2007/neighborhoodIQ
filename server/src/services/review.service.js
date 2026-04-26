const Review = require('../models/Review.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');

const createReview = async (userId, areaId, reviewBody) => {
  return Review.create({
    ...reviewBody,
    user: userId,
    area: areaId
  });
};

const getReviewsByArea = async (areaId, options = {}) => {
  const { limit = 10, page = 1 } = options;
  return Review.find({ area: areaId })
    .populate('user', 'name avatar')
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip((page - 1) * limit);
};

module.exports = {
  createReview,
  getReviewsByArea
};
