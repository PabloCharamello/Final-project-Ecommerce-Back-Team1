const { Admin } = require("../models");
async function Seeder() {
  await Admin.create({
    firstname: "admin",
    lastname: "admin",
    email: "admin@admin.com",
    password: "admin",
  });
}
module.exports = Seeder;
