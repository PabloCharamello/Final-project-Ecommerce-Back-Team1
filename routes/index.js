const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const addressRoutes = require("./addressRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use(authRoutes);
  app.use("/users", userRoutes);
  app.use("/users/:userid/address", addressRoutes);
  app.use("/admin", adminRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
};
