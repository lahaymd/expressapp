
var express = require('express');
var router = express.Router();
var Auth = require('../models/auth.js');

router.post('/', function(req, res) { 
 
   Auth.create({username: req.body.username, password: req.body.password}, function(err, user) {
  if (err) return console.error(err);
  console.log(user);
  res.json(user);
});
});

router.get('/', function(req, res) {
  Auth.find({}, function(err,docs) {
    res.json(docs)
  })
})

router.get('/:id', function(req, res) {
  Auth.findOne({_id: req.params.id}, function(err,docs) {
    res.json(docs)
    console.log(docs +'!')
  })
})


router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.get('/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});


module.exports = router;