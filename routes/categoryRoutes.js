const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.index);
categoryRouter.post("/", categoryController.store);
categoryRouter.get("/:id", categoryController.show);
categoryRouter.put("/:id", categoryController.update);
categoryRouter.delete("/:id", categoryController.destroy);

module.exports = categoryRouter;
