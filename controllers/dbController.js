const db = require("../models");

async function reset(req, res) {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  await require("../seeders/categorySeeder")();
  await require("../seeders/productSeeder")();
  await require("../seeders/userSeeder")();
  await require("../seeders/addressSeeder")();
  await require("../seeders/adminSeeder")();
  res.json({ message: "Database reset complete!" });
}

module.exports = {
  reset,
};
