const { validationResult } = require('express-validator');
const { BadRequestError } = require('../utility/errors/errors');

 const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    throw new BadRequestError(errorMessages.join('. '));
  }
  next();
};

module.exports = {validationErrorHandler};