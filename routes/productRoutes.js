const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("../middleware/checkJwt");

productRouter.get("/", productController.index);
productRouter.post("/", checkJwt, productController.store);
productRouter.get("/:id", productController.show);
productRouter.put("/:id", checkJwt, productController.update);
productRouter.delete("/:id", checkJwt, productController.destroy);

module.exports = productRouter;
