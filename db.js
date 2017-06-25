var Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'node', 'node', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions:{
      instanceName: "sqlexpress"
  }
});

var db = {};

db.name = sequelize.import(__dirname + '/models/name.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;