var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'root', 'password', {
  host: 'localhost',
  port: 3001
});

module.exports = sequelize;