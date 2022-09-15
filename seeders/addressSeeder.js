const { Address } = require("../models");
async function Seeder() {
  await Address.create({
    name: "Home",
    street: "Street",
    corner: "Corner",
    zipcode: "5000",
    city: "Maldonado",
    state: "Maldonado",
    country: "Uruguay",
    phone: "55533654",
    userId: 1,
  });
}
module.exports = Seeder;
