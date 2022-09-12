const { Category } = require("../models");
async function Seeder() {
  const Sofas = await Category.create({ name: "Sofas" });
  return { Sofas };
}

const { Category } = require("../models");
async function Seeder() {
  const Armchair = await Category.create({ name: "Armchair" });
  return { Armchair };
}

const { Category } = require("../models");
async function Seeder() {
  const Tables = await Category.create({ name: "Tables" });
  return { Tables };
}

const { Category } = require("../models");
async function Seeder() {
  const Lighting = await Category.create({ name: "Lighting" });
  return { Lighting };
}

const { Category } = require("../models");
async function Seeder() {
  const Office = await Category.create({ name: "Office" });
  return { Office };
}
module.exports = Seeder;
