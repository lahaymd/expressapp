var express = require('express');
var router = express.Router();
var User = require('./user');

// exports.users= router.get('/api/user', function(req, res) {
// 	User.find(function(err, user) {
// 		if (err)
// 			res.send(err);
// 		res.json(user);
// 	})
// })

// router.get('/', function(req, res) {
// 	res.json([{name: 'Jake', password: 'z040577'},
// 		{name: 'Mike', password: 'wag11739'}])
// })

router.get('/', function(req, res) {
	User.find(function(err, user) {
		if (err){
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
     console.log(user, 'User')
      res.json(user);
      
	});
});

module.exports = router;