module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {}

  Category.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(140),
      },
      lastname: {
        type: DataTypes.STRING(140),
      },
      email: {
        type: DataTypes.STRING(140),
      },
    },
    {
      sequelize,
      modelName: "admin",
    },
  );

  return Admin;
};
