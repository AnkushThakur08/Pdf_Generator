const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection").sequelize;

const User = sequelize.define("User", {
  userID: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    trim: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    trim: true,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true,
    trim: true,
  },

  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    trim: true,
  },

  Address: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    trim: true,
  },
});

module.exports = User;
