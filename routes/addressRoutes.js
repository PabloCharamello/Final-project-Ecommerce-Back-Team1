const express = require("express");
const addressRouter = express.Router();
const addressController = require("../controllers/addressController");

addressRouter.get("/", addressController.index);
addressRouter.post("/", addressController.store);
addressRouter.get("/:id", addressController.show);
addressRouter.put("/:id", addressController.update);
addressRouter.delete("/:id", addressController.destroy);

module.exports = addressRouter;
