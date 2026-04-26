const httpStatus = require('../constants/httpStatus');
const asyncHandler = require('../utils/asyncHandler');
const areaService = require('../services/area.service');
const ApiResponse = require('../utils/ApiResponse');

const getAreas = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.city) filter.city = req.query.city;
  if (req.query.type) filter.type = req.query.type;
  
  const options = {
    limit: parseInt(req.query.limit) || 10,
    page: parseInt(req.query.page) || 1,
    sortBy: req.query.sortBy || 'createdAt',
    order: req.query.order || 'desc'
  };

  const result = await areaService.queryAreas(filter, options);
  res.status(httpStatus.OK).send(new ApiResponse(httpStatus.OK, result));
});

const getArea = asyncHandler(async (req, res) => {
  const area = await areaService.getAreaById(req.params.areaId);
  res.status(httpStatus.OK).send(new ApiResponse(httpStatus.OK, area));
});

const createArea = asyncHandler(async (req, res) => {
  const area = await areaService.createArea(req.body);
  res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, area, 'Area created successfully'));
});

module.exports = {
  getAreas,
  getArea,
  createArea,
};
