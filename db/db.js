const Sequelize = require("sequelize");

const sequelize = new Sequelize("appointment", "root", "Snjay@66", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
