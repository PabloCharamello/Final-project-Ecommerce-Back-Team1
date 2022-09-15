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
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: new Date(),
        allowNull: false,
        get: function () {
          return this.getDataValue("createdAt").toLocaleString("en-GB");
        } /* tal vez ver de cambiar createdAt por alg'un otro m'etodo */,
      },
    },
    {
      sequelize,
      modelName: "order",
      timestamps: false,
      validate: {
        checkStock: async function () {
          for (const product of this.cart.productList) {
            const productDB = await Product.findByPk(product.id);
            if (productDB.stock < product.count) {
              /* cambiar count por qty*/
              throw new Error("Not enough stock!");
            }
          }
        },
      },
      hooks: {
        beforeBulkCreate: async (orders, options) => {
          for (const order of orders) {
            order.id = uuidv4();
            order.status = "pending";

            let total = 0;
            for (const product of order.cart.productList) {
              total += parseFloat(product.price * product.count);
            }
            order.total = total;
          }
        },
        beforeCreate: async (order, options) => {
          order.id = uuidv4();
          order.status = "pending";

          let total = 0;
          for (const product of order.cart.productList) {
            const productDB = await Product.findByPk(product.id);
            productDB.stock -= product.count;
            productDB.save();
            total += parseFloat(product.price * product.count);
          }
          order.total = total;
        },
      },
    },
  );

  return Order;
};
