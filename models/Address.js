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
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      corner: {
        type: DataTypes.STRING,
      },
      zipcode: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "address",
    },
  );

  return Address;
};
