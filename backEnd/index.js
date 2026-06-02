const express = require("express");
const app = express();
const cors = require("cors");
const {db} = require("./schema/db.config");
const {mainRouter} = require("./src/mainRoutes");
const { errorHandler } = require("./src/middleware/error-handler");

//! middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//! dotenv initiation
const dotenv = require("dotenv");
dotenv.config();

//!Main api
app.use("/api", mainRouter);

// ! your error handler middleware should be after all api calls
app.use(errorHandler);

//! connection and server configuration

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();
    console.log("Connected to database");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
