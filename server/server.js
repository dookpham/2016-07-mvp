var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '../public')));


var port = 3000;
app.listen(3000, function(err) {
  if (err) {
    console.log('error on server');
  }
  console.log('Listening to port:', port);
});