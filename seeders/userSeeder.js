const { User } = require("../models");
async function Seeder() {
  await User.create({
    firstname: "Test",
    lastname: "User",
    email: "user@user.com",
    phone: "111111",
    password: "user",
  });
}
module.exports = Seeder;
