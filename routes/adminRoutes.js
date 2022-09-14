const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const checkJwt = require("../middleware/checkJwt");

adminRouter.use(checkJwt);

adminRouter.get("/", adminController.index);
adminRouter.post("/", adminController.store);
adminRouter.get("/:id", adminController.show);
adminRouter.put("/:id", adminController.update);
adminRouter.delete("/:id", adminController.destroy);

module.exports = adminRouter;
