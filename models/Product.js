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
      "short-description": {
        type: DataTypes.STRING,
      },
      description: {
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
    },
    {
      sequelize,
      modelName: "product",
    },
  );

  return Product;
};
