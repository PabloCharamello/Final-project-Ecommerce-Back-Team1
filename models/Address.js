module.exports = (sequelize, Model, DataTypes) => {
  class Address extends Model {}

  Address.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      corner: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      zipcode: {
        type: DataTypes.INTEGER.UNSIGNED,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      state: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      country: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "address",
    },
  );

  return Address;
};
