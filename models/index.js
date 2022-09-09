const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const User = require("./User")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);

// Associations
Product.Category = Product.belongsTo(Category);
Category.Product = Category.hasMany(Product);

module.exports = {
  sequelize,
  User,
  Product,
  Category,
};
