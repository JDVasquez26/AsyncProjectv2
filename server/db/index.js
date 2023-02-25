const dbConnection = require("./dbconn");
const Plant = require('./models/Plant')
const Site = require('./models/Site')
const User = require('./models/User')


//ASSOCIATIONS
User.hasMany(Plant);
Plant.belongsTo(User);

User.hasMany(Site);
Site.belongsTo(User);


Site.hasMany(Plant);
Plant.belongsTo(Site);



module.exports = {
    dbConnection,
    Plant,
    Site,
    User
}
