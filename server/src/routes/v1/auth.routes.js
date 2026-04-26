const express = require('express');
const validate = require('../../middleware/validate.middleware');
const authValidator = require('../../validators/auth.validator');
const authController = require('../../controllers/auth.controller');

const router = express.Router();

router.post('/register', validate(authValidator.register), authController.register);
router.post('/login', validate(authValidator.login), authController.login);

module.exports = router;
