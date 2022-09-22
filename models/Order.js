const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, Model, DataTypes, Product) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
      },
      payment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cart: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: "order",
      hooks: {
        beforeBulkCreate: async (orders, options) => {
          for (const order of orders) {
            order.id = uuidv4();
            order.status = "Pending";

            let total = 0;
            for (const product of order.cart["productsList"]) {
              const productDB = await Product.findByPk(product.id);
              if (productDB.stock < product.quantity) {
                throw new Error("Not enough stock!");
              }
              productDB.stock -= product.quantity;
              productDB.save();
              total += parseFloat(product.price * product.quantity);
            }
            order.total = total;
          }
        },
        beforeCreate: async (order, options) => {
          order.id = uuidv4();
          order.status = "Pending";

          order.total = 0;
          for (const product of order.cart["productsList"]) {
            const productDB = await Product.findByPk(product.id);
            if (productDB.stock < product.quantity) {
              throw new Error("Not enough stock!");
            }
            productDB.stock -= product.quantity;
            productDB.save();
            order.total += parseFloat(product.price * product.quantity);
          }
        },
      },
    },
  );

  return Order;
};
