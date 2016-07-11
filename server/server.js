var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db/database.js');
var app = express();
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/meetups', function(req, res) {
  console.log('GET for meetups');

  db.Meetup.sync()
    .then(function() {
      // Retrieve objects from the database:
      return db.Meetup.findAll({ include: db.Restaurant});
    })
    .then(function(results) {
      res.json(results);
    });
  // .then(function(users) {
  //   users.forEach(function(user) {
  //     console.log(user.username + ' exists');
  //   });
  //   db.close();
  // })
  // .catch(function(err) {
  //   // Handle any error in the chain
  //   console.error(err);
  //   db.close();
  // });

  // res.send();
});


var port = 3000;
app.listen(3000, function(err) {
  if (err) {
    console.log('error on server');
  }
  console.log('Listening to port:', port);
});