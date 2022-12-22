const Sequelize = require('sequelize')
const dbConnection = require('./dbconn')

const Site = dbConnection.define("sites", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lighting: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Site;
