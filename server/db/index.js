const dbConnection = require("./dbconn");
const Plant = require('./Plant')
const Site = require('./Site')


Site.hasMany(Plant);
Plant.belongsTo(Site);



module.exports = {
    dbConnection,
    Plant,
    Site
}
