var express = require('express');
var router = express.Router();
var User = require('./user');
var Bio = require('./bio');
var notLoggedIn = require('./not_logged_in');
var session = require('./session');
var loadUser = require('./load_user');
var restrictUserToSelf = require('./restrict_user_to_self');
/* GET users listing. */
router.get('/', function(req, res) {
	var page = req.query.page && parseInt(req.query.page, 10) || 0;
	console.log(page);
	var maxUsersPerPage = 3;

  Bio.count(function(err, count) {
  		if (err) {
			return next(err);
			}
  		var lastPage = (page + 1) * maxUsersPerPage >= count;
      var paginate= Math.ceil(count/3);
      console.log("pageinate" + paginate)
  		console.log(count+"====")
  		console.log(lastPage+"*****")
	Bio.find({})
	  .sort({username: 1})
	  .skip(page * maxUsersPerPage)
	  .limit(maxUsersPerPage)
	  .exec(function (err, bio) {
      console.log(bio.length+"bio length")
  		res.render('bio', {
  			title: 'Users', 
  			bio: bio, 
  			page: page,
  			lastPage: lastPage,
        paginate: paginate
  		});
  	});
   });
});

router.get('/new', notLoggedIn, function(req, res) 
	{ res.render('new', {title: "New user"});
});

router.get('/:name', loadUser, function(req, res, next){ 
				res.render('profile', {title: 'User profile',
				user: req.user }); 

});

router.post('/bio', notLoggedIn, function(req, res) { 
  // Bio.findOne({'username': req.body.username}, function(err, docs) {
  	 
  // 	if (docs) {
  // 		res.send('username taken');
  // 	} else {

      Bio.create(req.body, function(err) {
      if (err) {
        if(err.code === 11000) {
          res.send("error code 10000"+err)
        } else {
          if (err.name === 'ValidationError') {
            return res.send(Object.keys(err.errors).map(function(errField) {
              return err.errors[errField].message; 
            }).join('. '), 406);
          } else {
          next(err);
          }
        }
        return; 
      }
    // })
    // var newBio = new Bio();
    // 	newBio.username= req.body.username;
    // 	newBio.name =  req.body.name;
    // 	newBio.bio = req.body.bio;
    // 	newBio.password = req.body.password;
    // 	newBio.email = req.body.email;
    // 	req.session.user = newBio;

    //     newBio.save(function(err){
    //     	if(err)
    //     		throw err;
    //     });
    req.session.user=req.body
    console.log("SESSION"+JSON.stringify(req.session.user));
     res.redirect('/users');
	     // };
   });
});

router.delete('/:name', loadUser, restrictUserToSelf,  function(req, res, next) {
	
			req.user.remove();
			req.session.destroy(); 
			res.redirect('/users');
		
});
// router.delete('/:name', restrictUserToSelf, function(req, res, next) {
// 	Bio.findOne({'name': req.params.name}, function(err, user) {
// 		if(user) {
// 			user.remove();
// 			res.redirect('/users');
// 		} else {
// 			next();
			
// 		}
// 	});
// });







module.exports = router;
