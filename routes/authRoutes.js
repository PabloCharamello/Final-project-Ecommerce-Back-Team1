const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/tokens", authController.token);

module.exports = authRouter;
