var Sequelize = require('sequelize');
var db = new Sequelize('mvp', 'root', '');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
});


var Meetup = db.define('Meetup', {
  size: Sequelize.INTEGER,
  restaurant: Sequelize.STRING,
});

var UserMeetups = db.define('UserMeetups', {

});


User.belongsToMany(Meetup, { through: UserMeetups });
Meetup.belongsToMany(User, { through: UserMeetups });

// USERS Table
// id name

// MEETUP Table
// id location date size?

// USERS-MEETUP JOIN TABLE
// id meetupID userID


/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */

Meetup.sync()
  .then(function() {
    return Meetup.create({size: 4, restaurant: 'Chipotle'});
  });

User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });

module.exports = db;