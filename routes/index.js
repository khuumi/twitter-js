(function(){
  'use strict';
  module.exports = function(io){
    var express = require('express');
    var router = express.Router();

    var tweetBank = require('../tweetBank');

    router.get('/', function(req, res){
      var tweets = tweetBank.list();
      var user_name = 'Danny';
      res.render('index', {
                            title: 'Twitter.js',
                            tweets: tweets,
                            user_name: user_name,
                            showForm : true});
      });

      router.get('/users/:name', function(req, res) {
        var name = req.params.name;
        var list = tweetBank.find({name: name});

        res.render('index', {
                              title: 'Twitter.js - Posts by'+name,
                              tweets: list,
                              user_name : 'Danny',
                              name: name,
                              showForm: true});
        });


      router.get('/users/:name/tweets/:id', function(req, res) {
        var id = parseInt(req.params.id);
        var name = req.params.name;
        var tweets = tweetBank.find({name: name, tweet_id:id});
        console.log(tweets);
        res.render('index', {
                              title: 'Twitter.js - Posts by'+name,
                              tweets: tweets,
                              user_name : 'Danny',
                              name: name,
                              showForm: true});
      });

      router.post('/submit', function(req, res){
        console.log(req.body);
        var name = req.body.name;
        var text = req.body.text;
        io.sockets.emit('new_tweet', { name: name, text: text });
        tweetBank.add(name, text);
        res.redirect('/');
      });


    return router;
  };

})();

