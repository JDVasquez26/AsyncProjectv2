const Sequelize = require('sequelize');
const dbConnection = new Sequelize(
  process.env.DATABASE_URL || 
  'postgres://localhost:5432/plants_v2',
  {
    logging: false
  }
);




module.exports = dbConnection;