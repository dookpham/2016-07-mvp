var Sequelize = require('sequelize');
var db = new Sequelize('mvp', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Restaurant = db.define('Restaurant', {
  name: Sequelize.STRING,
  'featured_image': Sequelize.STRING,
  cuisines: Sequelize.STRING,
  'menu_url': Sequelize.STRING,
  'user_rating': Sequelize.STRING,
  'address': Sequelize.STRING,
});

var Meetup, UserMeetup;
// var Meetup = db.define('Meetup', {
//   size: Sequelize.INTEGER,
// });

// var UserMeetup = db.define('UserMeetup', {

// });

// Restaurant.hasMany(Meetup);
// Meetup.belongsTo(Restaurant);

// User.hasMany(UserMeetup);
// UserMeetup.belongsTo(User);

// Meetup.hasMany(UserMeetup);
// UserMeetup.belongsTo(Meetup);

User.sync()
  .then(function() {
    Restaurant.sync()
      .then(function() {
        // User.create({username: 'Jean Valjean'});
        // User.create({username: 'Duke Pham'});
        // User.create({username: 'Allen Price'});
        // User.create({username: 'Mylani Demas'});
      })
      .then(function() {
        // Restaurant.create({name: 'Chipotle'});
        // Restaurant.create({name: 'Subway'});
        // Restaurant.create({name: 'Sarku'});
        // Restaurant.create({name: 'Charleys'});
      });
  });
  // .then(function() {
  //   Meetup.sync()
  //     .then(function() {
  //       // Meetup.create({size: 4, RestaurantId: 1});
  //       // Meetup.create({size: 4, RestaurantId: 2});
  //       // Meetup.create({size: 4, RestaurantId: 3});
  //       // Meetup.create({size: 4, RestaurantId: 4});
  //     });
  // })
  // .then(function() {
  //   UserMeetup.sync();
  // });

module.exports = {User: User, Restaurant: Restaurant, Meetup: Meetup, UserMeetup: UserMeetup };