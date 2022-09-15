const db = require("./models");

module.exports = async () => {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  await require("./seeders/categorySeeder")();
  await require("./seeders/productSeeder")();
  await require("./seeders/userSeeder")();
  await require("./seeders/addressSeeder")();
  await require("./seeders/adminSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
