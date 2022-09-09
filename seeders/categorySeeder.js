const { Category } = require("../models");
async function Seeder() {
  const Sofas = await Category.create({ name: "Sofas" });
  return { Sofas };
}
module.exports = Seeder;
