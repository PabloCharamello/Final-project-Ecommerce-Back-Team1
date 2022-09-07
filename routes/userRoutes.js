const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.index);
userRouter.post("/", userController.store);
userRouter.get("/:id", userController.show);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.destroy);

module.exports = userRouter;
