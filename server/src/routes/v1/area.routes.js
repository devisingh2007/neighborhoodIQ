const express = require('express');
const validate = require('../../middleware/validate.middleware');
const areaValidator = require('../../validators/area.validator');
const areaController = require('../../controllers/area.controller');
const { protect } = require('../../middleware/auth.middleware');
const { authorize } = require('../../middleware/admin.middleware');
const cache = require('../../middleware/cache.middleware');

const router = express.Router();

router
  .route('/')
  .get(cache(600), areaController.getAreas)
  .post(protect, authorize('admin'), validate(areaValidator.createArea), areaController.createArea);

router
  .route('/:areaId')
  .get(areaController.getArea);

module.exports = router;
