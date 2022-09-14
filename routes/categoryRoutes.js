const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("../middleware/checkJwt");
const checkAdmin = require("../middleware/checkAdmin");

categoryRouter.get("/", categoryController.index);
categoryRouter.post("/", checkJwt, checkAdmin, categoryController.store);
categoryRouter.get("/:slug", categoryController.show);
categoryRouter.put("/:id", checkJwt, checkAdmin, categoryController.update);
categoryRouter.delete("/:id", categoryController.destroy);

module.exports = categoryRouter;
