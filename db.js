var Sequelize = require('sequelize');

//update parameters below
const sequelize = new Sequelize('DATABASE_NAME', 'USER_NAME', 'PASSWORD', {
  host: 'popsql2k16t',
  dialect: 'mssql',
  
  // disable logging; default: console.log
  logging: false,

  /*
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
  */
});

var db = {};

db.name = sequelize.import(__dirname + '/models/name.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;