const express = require("express");

const {
  createAnswerController,
  deleteAnswerController,
  getAnswersController,
  getSingleAnswerController,
  updateAnswerController,
} = require("../controller/answer.controller.js");

const {
  answerIdValidation,
  createAnswerValidation,
  getAnswersValidation,
  updateAnswerValidation,
} = require("../validations/answer.validation.js");

const { authenticateUser } = require("../../../middleware/authentication.js");

const answerRoute = express.Router();

/**
 * @route POST /api/answers
 * @desc Post a new answer
 * @access Protected
 */
answerRoute.post(
  "/postAnswer",
  authenticateUser,
  createAnswerValidation,
  createAnswerController,
);

/**
 * @route GET /api/answers
 * @desc Get answers for a question with pagination
 * @access Public
 */
answerRoute.get("/getAnswer", getAnswersValidation, getAnswersController);

/**
 * @route GET /api/answers/:answerId
 * @desc Get one answer
 * @access Public
 */
answerRoute.get(
  "/getSingleAnswer/:answerId",
  answerIdValidation,
  getSingleAnswerController,
);

/**
 * @route PATCH /api/answers/:answerId
 * @desc Update one answer
 * @access Protected
 */
answerRoute.patch(
  "/updateSingleAnswer/:answerId",
  authenticateUser,
  updateAnswerValidation,
  updateAnswerController,
);

/**
 * @route DELETE /api/answers/:answerId
 * @desc Delete one answer
 * @access Protected
 */
answerRoute.delete(
  "/deleteAnswer/:answerId",
  authenticateUser,
  answerIdValidation,
  deleteAnswerController,
);

module.exports = { answerRoute };
