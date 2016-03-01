var express = require('express');
var router = express.Router();
var Bio = require('./bio');
var notLoggedIn = require('./not_logged_in');


router.get('/new', notLoggedIn, function(req, res) { 
	res.render('newsession', {title: "Log Inn"});
});

router.post('/session', notLoggedIn, function(req, res) { 
	
Bio.findOne({'username': req.body.username}, function(err, docs) {
		if(docs && docs.password === req.body.password) {
			req.session.user = docs;
			console.log("####"+req.session.cookie.expires+ "****")
			console.log(req.session.user.username+ "$$$$$req.session.user")
			res.redirect('/users')
		} else {
			res.redirect('/session/new')
		}
	});
	 });

router.delete('/session', function(req, res, next) { 
	req.session.destroy(); 
	res.redirect('/');
}); 


module.exports = router;