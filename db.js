const { Sequelize } = require("sequelize");

const connect = new Sequelize("nodesequelize", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = connect;
