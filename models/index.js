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
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Address = require("./Address")(sequelize, Model, DataTypes);

// Associations
Product.Category = Product.belongsTo(Category);
Category.Product = Category.hasMany(Product);

Order.User = Order.belongsTo(User);
User.Order = User.hasMany(Order);

User.Address = User.hasMany(Address);
Address.User = Address.belongsTo(User);

Address.Order = Address.hasMany(Order);
Order.Address = Order.belongsTo(Address);

User.Order = User.hasMany(Order);
Order.User = Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Admin,
  Product,
  Category,
};
