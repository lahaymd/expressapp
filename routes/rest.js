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

router.get('/api/user', function(req, res) {
	User.find(function(err, user) {
		if (err)
			res.send(err);
		res.json(user);
	})
})

module.exports = router;