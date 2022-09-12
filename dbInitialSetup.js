const db = require("./models");

module.exports = async () => {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  await require("./seeders/productSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
