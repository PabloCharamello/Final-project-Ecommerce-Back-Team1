const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const addressRoutes = require("./addressRoutes");
const authRoutes = require("./authRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use(authRoutes);
  app.use("/users", userRoutes);
  app.use("/address", addressRoutes);
  app.use("/orders", orderRoutes);
  app.use("/admin", adminRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
};
