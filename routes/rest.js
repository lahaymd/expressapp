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

router.get('/session',  function(req, res) { 
User.findOne({'username': req.body.username}, function(err, docs) {
		if(docs && docs.password === req.body.password) {
			req.session.user = docs;
			 
			res.json(docs);
		} else {
			// res.redirect('newuser')
			res.send('you fucked up')
		}
	});
	 });


module.exports = router;