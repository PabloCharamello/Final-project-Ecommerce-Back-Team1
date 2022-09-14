module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      "payment-method": {
        type: DataTypes.STRING,
        allowNull: false,
      },
      "product-list": {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
