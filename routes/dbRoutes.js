const express = require("express");
const dbRouter = express.Router();
const dbController = require("../controllers/dbController");

dbRouter.post("/reset", dbController.reset);

module.exports = dbRouter;
