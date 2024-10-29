const { Sequelize } = require("sequelize");

const connect = new Sequelize("nodesequelize", "root", "admin123", {
  host: "localhost",
  dialect: "mysql",
  //Desativa o registro em log
  logging: false,
});

module.exports = connect;
