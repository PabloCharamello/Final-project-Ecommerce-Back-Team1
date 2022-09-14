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
      },
      designer: {
        type: DataTypes.STRING,
      },
      "short-description": {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      details: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      stock: {
        type: DataTypes.INTEGER.UNSIGNED,
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
