const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    dialectModule: require("pg"),
    logging: false,
  },
);

const User = require("./User")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes, Product);
const Address = require("./Address")(sequelize, Model, DataTypes);

// Associations
Product.belongsTo(Category);
Category.hasMany(Product);

Order.belongsTo(User);
User.hasMany(Order);

User.hasMany(Address);
Address.belongsTo(User);

// Address.hasOne(Order); I want to write this but sequelize doesn't want me to.
Order.belongsTo(Address);
Address.hasMany(Order);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Admin,
  Product,
  Category,
  Order,
  Address,
};
