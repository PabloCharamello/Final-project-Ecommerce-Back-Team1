const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("../middleware/checkJwt");
const checkAdmin = require("../middleware/checkAdmin");

productRouter.get("/", productController.index);
productRouter.post("/", checkJwt, checkAdmin, productController.store);
productRouter.get("/:slug", productController.show);
productRouter.patch("/:id", checkJwt, checkAdmin, productController.update);
productRouter.delete("/:id", checkJwt, checkAdmin, productController.destroy);

module.exports = productRouter;
