const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("../middleware/checkJwt");

categoryRouter.get("/", categoryController.index);
categoryRouter.post("/", checkJwt, categoryController.store);
categoryRouter.get("/:id", categoryController.show);
categoryRouter.put("/:id", checkJwt, categoryController.update);
categoryRouter.delete("/:id", checkJwt, categoryController.destroy);

module.exports = categoryRouter;
