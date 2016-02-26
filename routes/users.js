var express = require('express');
var router = express.Router();
var User = require('./user');
var Bio = require('./bio');
var notLoggedIn = require('./not_logged_in');
var restrictUserToSelf = require('./restrict_user_to_self');


/* GET users listing. */
router.get('/', function(req, res) {
	Bio.find(function (err, bio, count) {
  res.render('bio', {title: 'Users',
   bio: bio});
  	});
});

router.get('/new', notLoggedIn, function(req, res) 
	{ res.render('new', {title: "New user"});
});

router.get('/:name', function(req, res, next){ 
	Bio.findOne({'name': req.params.name},function(err, user) {
			if(user) {
				res.render('profile', {title: 'User profile',
				user: user }); 
			} else {
			  next(); 
	}
});
});

router.post('/bio', notLoggedIn, function(req, res) { 
  Bio.findOne({'username': req.body.username}, function(err, docs) {
  	if (docs) {
  		res.send('username taken');
  	} else {
    var newBio = new Bio();
    	newBio.username= req.body.username;
    	newBio.name =  req.body.name;
    	newBio.bio = req.body.bio;
    	newBio.password = req.body.password;

    newBio.save(function(err){
    	if(err)
    		throw err;
    });
     res.redirect('/users');
	     };
   });
 });


router.delete('/:name', restrictUserToSelf, function(req, res, next) {
	Bio.findOne({'name': req.params.name}, function(err, user) {
		if(user) {
			user.remove();
			res.redirect('/users');
		} else {
			next();
			
		}
	});
});







module.exports = router;
