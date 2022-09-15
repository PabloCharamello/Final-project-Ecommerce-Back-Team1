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
      validate: {
        checkStock: async function () {
          const cart = this.dataValues.cart;
          for (const product of cart["productsList"]) {
            const productDB = await Product.findByPk(product.id);
            if (productDB.stock < product.quantity) {
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
            order.cart["productsList"].forEach(async (product) => {
              const productDB = await Product.findByPk(product.id);
              productDB.stock -= product.count;
              productDB.save();
              total += parseFloat(product.price * product.count);
            });
            order.total = total;
          }
        },
        beforeCreate: async (order, options) => {
          order.id = uuidv4();
          order.status = "pending";

          let total = 0;
          order.cart["productsList"].forEach(async (product) => {
            const productDB = await Product.findByPk(product.id);
            productDB.stock -= product.count;
            productDB.save();
            total += parseFloat(product.price * product.count);
          });
          order.total = total;
        },
      },
    },
  );

  return Order;
};
