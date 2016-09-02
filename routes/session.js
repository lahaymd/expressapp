 var express = require('express');
var router = express.Router();
var User = require('./user');
var notLoggedIn = require('./not_logged_in');
// var session = require('./session');

router.get('/new', notLoggedIn, function(req, res) { 
	res.render('newsession', {title: "Log Inn"});
});

router.get('/newuser', function(req, res) {
	res.render('new')
})

router.post('/session',  function(req, res) { 
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

router.delete('/session', function(req, res, next) { 
	req.session.destroy(); 
	res.redirect('/');
}); 


module.exports = router;