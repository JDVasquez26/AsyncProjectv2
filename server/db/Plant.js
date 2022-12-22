const Sequelize = require('sequelize')
const dbConnection = require('./dbconn')

const Plant = dbConnection.define('plants', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "default-plantimage.jpg",
      },
      amazonLink: {
        type: Sequelize.STRING(1000),
        // allowNull: true,
        validate: {
            isUrl: true,
          },
      },
      purchased: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    });


    module.exports = Plant;