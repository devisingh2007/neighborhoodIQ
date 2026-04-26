const Area = require('../models/Area.model');
const NeighborhoodScore = require('../models/NeighborhoodScore.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../constants/httpStatus');
const messages = require('../constants/messages');

/**
 * Search areas with filters and pagination
 */
const queryAreas = async (filter, options) => {
  const { limit = 10, page = 1, sortBy = 'createdAt', order = 'desc' } = options;
  const skip = (page - 1) * limit;

  const areas = await Area.find(filter)
    .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
    .skip(skip)
    .limit(limit)
    .populate('scores');

  const totalResults = await Area.countDocuments(filter);
  
  return {
    results: areas,
    page,
    limit,
    totalPages: Math.ceil(totalResults / limit),
    totalResults,
  };
};

/**
 * Get area by id
 */
const getAreaById = async (id) => {
  const area = await Area.findById(id).populate('scores');
  if (!area) {
    throw new ApiError(httpStatus.NOT_FOUND, messages.AREA_NOT_FOUND);
  }
  return area;
};

/**
 * Create an area
 */
const createArea = async (areaBody) => {
  return Area.create(areaBody);
};

module.exports = {
  queryAreas,
  getAreaById,
  createArea,
};
