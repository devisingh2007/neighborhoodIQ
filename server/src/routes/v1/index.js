const express = require('express');
const authRoutes = require('./auth.routes');
const areaRoutes = require('./area.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/areas', areaRoutes);

module.exports = router;
