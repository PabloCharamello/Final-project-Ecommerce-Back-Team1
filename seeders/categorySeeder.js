const { Category } = require("../models");
async function Seeder() {
  await Category.create({ name: "Sofas" });
  await Category.create({ name: "Armchairs" });
  await Category.create({ name: "Tables" });
  await Category.create({ name: "Lighting" });
  await Category.create({ name: "Office" });
  await Category.create({ name: "Beds" });
}
module.exports = Seeder;
