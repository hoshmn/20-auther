'use strict';

var router = require('express').Router();


var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
var Story = require('../stories/story.model');

router.get('/login', function(req,res,next){
	console.log('gotme');
});

router.post('/login', function (req, res, next) {
	console.log(req.body);
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      console.log("USER IS NOT VALID!");
      res.sendStatus(401);
    } else {
      console.log("USER IS VALID!");
      req.session.userId = user.id;
      console.log('$$$$$$', user.id);
      res.status(200).json(user);
    }
  })
  .catch(next);
});


router.post('/signup', function (req, res, next) {
  console.log('you got me', req.body);
  User.create(req.body)
  .then(function (user) {
    if (!user) {
      console.log("USER IS NOT VALID!");
      res.sendStatus(401);
    } else {
      console.log("USER IS VALID!");
      req.session.userId = user.id;
      console.log('$$$$$$', user.id);
      res.status(200).json(user);
    }
  })
  .catch(next);
});



module.exports = router;