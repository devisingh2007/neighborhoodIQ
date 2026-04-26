const httpStatus = require('../constants/httpStatus');
const asyncHandler = require('../utils/asyncHandler');
const authService = require('../services/auth.service');
const ApiResponse = require('../utils/ApiResponse');

const register = asyncHandler(async (req, res) => {
  const user = await authService.registerUser(req.body);
  const token = user.generateAuthToken();
  res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, { user, token }, 'User registered successfully'));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const token = user.generateAuthToken();
  res.status(httpStatus.OK).send(new ApiResponse(httpStatus.OK, { user, token }, 'Login successful'));
});

module.exports = {
  register,
  login,
};
