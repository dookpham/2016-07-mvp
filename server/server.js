var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./db/database.js');
// var https = require('https');
var request = require('request');

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
  // console.log('session user:', req.session.user);
  // if (req.session.user) {
  //   next();
  // } else {
  //   // res.redirect(path.join(__dirname, '../public/login'));
  //   // res.redirect('/');
  //   res.end();
  // }
  next();
};

const createSession = function(req, res, newUser, redirect) {
  //call regenerate to overwrite all old session info
  return req.session.regenerate(function() {
    req.session.user = newUser;
    res.redirect('/');
  });
};

// -------------- ROUTES  -----------------  ///



app.get('/api/meetups', auth, function(req, res) {
  console.log('GET for meetups');

  db.Meetup.findAll({ include: db.Restaurant})
    .then(function(results) {
      res.json(results);
    });
});

app.get('/api/friends', auth, function(req, res) {
  console.log('GET for friends');
  db.User.findAll()
    .then(function(results) {
      res.json(results);
    });
});

app.get('/api/restaurants', auth, function(req, res) {
  console.log('GET for restaurants');
  db.Restaurant.findAll()
    .then(function(results) {
      console.log(results);
      res.json(results);
    });
});

app.post('/api/addrestaurant', auth, function(req, res) {
  console.log('POST for add restaurant', req.body);
  db.Restaurant.findOrCreate({where: {
    name: req.body.restaurant.name,
    'featured_image': req.body.restaurant.featured_image,
    cuisines: req.body.restaurant.cuisines, 
    'menu_url': req.body.restaurant.menu_url,
    'user_rating': req.body.restaurant.user_rating.aggregate_rating,
    address: req.body.restaurant.location.address
  }})
  .then(function(value) {
    console.log('create restaurant!');
    res.json(JSON.stringify({success: true}));
  });
});

app.post('/api/searchrestaurant', auth, function(req, res) {
  console.log('POST for search restaurant', req.body);
  db.Restaurant.findOne({where: {name: req.body.restaurant }})
    .then(function(results) {
      if (results) {
        console.log('restaurant exists!', results);
      } else {
        console.log('restaurant does NOT exist!');

        var query = {
          lat: 37.784108,
          lon: -122.408977,
          radius: 500,
          q: req.body.restaurant,
          sort: 'real_distance'
        };

        var queryString = '';
        for (var k in query) {
          queryString += k + '=' + query[k] + '&';
        }
        var url = 'https://developers.zomato.com/api/v2.1/search?' + queryString;
        // console.log('url:', url);
        request({
          url: url,
          headers: {
            'user-key': '9e4de159663e38b767efa078ab673d26',
          }
        },
          function(err, response, body) {
            if (err) {
              console.log('ERR', err);
            }
            console.log('body:', body);
            res.json(body);
          }
        );

      }
    });
});

app.post('/api/signup', auth, function(req, res) {
  console.log('POST for signup', req.body);
  db.User.findOrCreate({where: {username: req.body.username}})
    .then(function(results) {
      const user = results[0];  
      if (user.isNewRecord) {
        createSession(req, res, user);
      } else {
        res.redirect('/login');
      }
    });
});

app.post('/api/login', function(req, res) {
  console.log('POST for login', req.body);
  db.User.find({where: {username: req.body.username, password: req.body.password}})
    .then(function(results) {
      const user = results[0];  
      if (user) {
        createSession(req, res, user);
      } else {
        res.redirect('/login');
      }
    });


  res.send('done');
});


app.get('/*', function(req, res) {
  res.redirect('/');
});

var port = 3000;
app.listen(3000, function(err) {
  if (err) {
    console.log('error on server');
  }
  console.log('Listening to port:', port);
});