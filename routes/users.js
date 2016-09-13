var express = require('express');
var router = express.Router();
var User = require('./user');
var notLoggedIn = require('./not_logged_in');
var session = require('./session');
var loadUser = require('./load_user');
var restrictUserToSelf = require('./restrict_user_to_self');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    var index= file.mimetype.indexOf('/');
    var mime= file.mimetype.substring(index).slice(1);
    cb(null, Date.now() +'.'+ mime) //Appending .jpg
  }
})
var upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', function(req, res) {
	var page = req.query.page && parseInt(req.query.page, 10) || 0;
	//console.log(page);
	var maxUsersPerPage = 3;
  User.count(function(err, count) {
  		if (err) {
			return next(err);
			}
  		var lastPage = (page + 1) * maxUsersPerPage >= count;
      var paginate= Math.ceil(count/3);
      var last = Math.floor(count/3);
	User.find({})
	  .sort({username: 1})
	  .skip(page * maxUsersPerPage)
	  .limit(maxUsersPerPage)
	  .exec(function (err, user) {
  		res.render('user', {
  			title: 'Users', 
  			users: user, 
  			page: page,
  			lastPage: lastPage,
        paginate: paginate,
        last: last
        
  		});
  	});
   });
});

router.get('/new', notLoggedIn, function(req, res) 
	{ res.render('new', {title: "New user"});
});

router.get('/ajaxtest', function(req, res) {
    res.render('test')
});

router.get('/:name', loadUser, function(req, res, next){ 
				res.render('profile', {title: 'User profile',
				user: req.user }); 

});

router.post('/user', notLoggedIn, upload.single('image'), function(req, res) { 
    var array = req.body;
    array.image = req.file.path;
      User.create(array, function(err, docs) {
        req.session.user=req.body;
        console.log(docs)
	    });
});

router.delete('/:name', loadUser, restrictUserToSelf,   function(req, res, next) {
			req.user.remove();
			req.session.destroy(); 
			res.redirect('/');
		
});

router.put('/:name',  function(req, res, next) {
  var name = req.params.name;
  var updatedname = req.body
    User.findOneAndUpdate({name: name}, updatedname, {new : true}, function(err, model) {
      if(err) {
        return next(err);
      }
      res.redirect('/users')
    })
})









module.exports = router;
