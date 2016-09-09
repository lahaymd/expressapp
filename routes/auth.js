var express = require('express');
var router = express.Router();
var User = require('./user');
var Auth = require('../models/auth')
var notLoggedIn = require('./not_logged_in');
var session = require('./session');
var loadUser = require('./load_user');
var restrictUserToSelf = require('./restrict_user_to_self');
var multer = require('multer');

router.post('/authorize', function(req,res) {
	var foo = req.body;
	Auth.create(foo, function(err,docs){
		console.log(docs);
	});
})






module.exports = router;