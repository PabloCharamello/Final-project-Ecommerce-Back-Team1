const slugify = require("slugify");

module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(140),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        unique: true,
      },
      "short-description": {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      stock: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      images: {
        type: DataTypes.JSON,
      },
      featured: {
        type: DataTypes.BOOLEAN,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product",
      hooks: {
        beforeBulkCreate: async (products, options) => {
          for (const product of products) {
            product.slug = slugify(product.name, {
              lower: true,
              strict: true,
            });
          }
        },
        beforeCreate: async (product, options) => {
          product.slug = slugify(product.name, {
            lower: true,
            strict: true,
          });
        },
      },
    },
  );

  return Product;
};
