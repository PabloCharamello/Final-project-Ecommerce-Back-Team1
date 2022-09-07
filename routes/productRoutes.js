const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.index);
productRouter.post("/", productController.store);
productRouter.get("/:id", productController.show);
productRouter.put("/:id", productController.update);
productRouter.delete("/:id", productController.destroy);

module.exports = productRouter;
