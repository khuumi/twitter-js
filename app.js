'use strict';

var express = require('express');
var morgan = require('morgan');
var app = express();

var PORT = 3000;

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Twitter App listening on http://%s:%s', host, port);



});

