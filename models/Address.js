const { DataTypes } = require("sequelize");

const db = require("../db.js");

const User = require("./User.js");

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
});

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
