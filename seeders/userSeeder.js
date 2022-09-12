const { User } = require("../models");
async function Seeder() {
  await User.create({
    firstname: "Sebastian",
    lastname: "Guadalupe",
    email: "seba@mail.com",
    phone: "111111",
    password: "password",
  });
}
module.exports = Seeder;
