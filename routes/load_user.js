var Bio = require('./bio');
var util = require('util')
function loadUser(req, res, next) {

	Bio.findOne({'name': req.params.name}, function(err, docs) {
		var user= req.user= docs;

		 console.log(util.inspect(docs)+"*****")
 console.log("$$$$$"+util.inspect(user)+"$$$$$$$$$$")
		if(!docs) {
			res.send('notFound', 404)
		} else {
			next();
		}
	})

}

module.exports = loadUser;


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

// app.del('/users/:name', function(req, res, next) { if (users[req.params.name]) {
// delete users[req.params.name];
// res.redirect('/users'); } else {
// next(); }
// }); };