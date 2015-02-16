'use strict';

var express = require('express');
var morgan = require('morgan');
var app = express();
var swig = require('swig');

var PORT = 3000;


var people = [{ name:'Full'}, {name: 'Stacker'},
              {name: 'Sonny'}];



app.use(morgan('dev'));
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false});

app.get('/', function (req, res) {
  res.render('index', {title: 'Hall of Fame',
                       people: people});
});




var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Twitter App listening on http://%s:%s', host, port);



});

