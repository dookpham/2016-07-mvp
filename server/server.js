var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./db/database.js');


var app = express();


// -------------- MIDDLEWARE  -----------------  ///

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
  secret: 'secretStuff',
}));

// -------------- GHETTO AUTHENTICATOR  -----------------  ///

const auth = function(req, res, next) {
  console.log('session user:', req.session.user);
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

const createSession = function(req, res, newUser) {
  //call regenerate to overwrite all old session info
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};

// -------------- ROUTES  -----------------  ///

app.get('/api/meetups', auth, function(req, res) {
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

app.get('/api/friends', auth, function(req, res) {
  console.log('GET for friends');
  db.User.sync()
    .then(function() {
      return db.User.findAll();
    })
    .then(function(results) {
      res.json(results);
    });
});

app.get('/api/restaurants', auth, function(req, res) {
  console.log('GET for friends');
  db.Restaurant.sync()
    .then(function() {
      return db.Restaurant.findAll();
    })
    .then(function(results) {
      res.json(results);
    });
});

app.post('/api/signup', auth, function(req, res) {
  console.log('POST for signup', req.body);
  db.User.findOrCreate({where: {username:req.body.username}})
    .then(function(results) {
      const user = results[0];  
      if (user.isNewRecord) {
        createSession(req, res, user);
      } else {
        res.redirect('/signupError');
      }
    });
});

app.post('/api/login', function(req, res) {
  console.log('POST for login', req.body);
  // db.User.sync()
  //   .then(function() {
  //     return db.User.findAll();
  //   })
  //   .then(function(results) {
  //     res.json(results);
  //   });
  res.send('done');
});



var port = 3000;
app.listen(3000, function(err) {
  if (err) {
    console.log('error on server');
  }
  console.log('Listening to port:', port);
});