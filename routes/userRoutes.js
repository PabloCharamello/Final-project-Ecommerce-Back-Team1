const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("../middleware/checkJwt");

userRouter.get("/", userController.index);
userRouter.post("/", userController.store);
userRouter.get("/:id", checkJwt, userController.show);
userRouter.put("/:id", checkJwt, userController.update);
userRouter.delete("/:id", checkJwt, userController.destroy);

module.exports = userRouter;
