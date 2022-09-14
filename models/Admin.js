const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {}

  Admin.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "admin",
      hooks: {
        beforeBulkCreate: async (users, options) => {
          for (const user of users) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
        beforeCreate: async (user, options) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
    },
  );

  Admin.prototype.isValidPassword = async function (password) {
    const valid = await bcrypt.compare(password, this.password);
    return valid;
  };

  return Admin;
};
