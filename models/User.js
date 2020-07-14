const Sequelize = require("sequelize"); //para usar el modelo del user
const db = require("../database/db.js");
//datos de nuestra BD
module.exports = db.sequelize.define(
  "usuario",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    user_type: {
      type: Sequelize.STRING,
    },
    region: {
      type: Sequelize.STRING,
    },
    marca: {
      type: Sequelize.STRING,
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
