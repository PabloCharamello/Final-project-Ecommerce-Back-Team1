const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const checkJwt = require("../middleware/checkJwt");

orderRouter.use(checkJwt);

orderRouter.get("/", orderController.index);
orderRouter.get("/:id", orderController.show);
orderRouter.post("/", orderController.store);
orderRouter.put("/:id", orderController.update);

module.exports = orderRouter;
