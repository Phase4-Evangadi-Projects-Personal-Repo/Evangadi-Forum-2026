const express = require('express');
const authRouter = express.Router(); 
const {
  registerController,
  loginController,
} = require('../controller/auth.controller.js');
const {
  registerValidation,
  loginValidation,
} = require('../validations/auth.validation.js');


/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register', registerValidation, registerController);

/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
authRouter.post('/login', loginValidation, loginController);

module.exports = {authRouter};
