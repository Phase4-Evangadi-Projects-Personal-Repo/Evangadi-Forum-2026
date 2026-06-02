const express = require('express');
const {authRouter} = require('./api/auth/Routes/auth.routes.js');

 const mainRouter = express.Router();

// Authentication routes
mainRouter.use('/auth', authRouter);


module.exports = {mainRouter};