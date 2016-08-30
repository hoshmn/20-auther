'use strict';

var router = require('express').Router();


var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
var Story = require('../stories/story.model');

router.get('/login', function(req,res,next){
	console.log('gotme');
});

router.post('/login', function (req, res, next) {
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',req.body);
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
    }
  })
  .catch(next);
});



module.exports = router;