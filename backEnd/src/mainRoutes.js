const express = require("express");
const { authRouter } = require("./api/auth/Routes/auth.routes.js");
const { questionRoutes } = require("./api/question/routes/question.routes.js");
const { answerRoute } = require("./api/answer/routes/answer.routes.js");
const mainRouter = express.Router();

// Authentication routes
mainRouter.use("/auth", authRouter);
mainRouter.use("/question", questionRoutes);
mainRouter.use("/answer", answerRoute);

module.exports = { mainRouter };
