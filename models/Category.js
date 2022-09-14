const slugify = require("slugify");

module.exports = (sequelize, Model, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "category",
      hooks: {
        beforeBulkCreate: async (categories, options) => {
          for (const category of categories) {
            category.slug = slugify(category.name, {
              lower: true,
              strict: true,
            });
          }
        },
        beforeCreate: async (category, options) => {
          category.slug = slugify(category.name, {
            lower: true,
            strict: true,
          });
        },
      },
    },
  );

  return Category;
};
