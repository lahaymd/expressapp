var Bio = require('./bio');

function loadUser(req, res, next) {
	var user = req.user = Bio.findOne({'name': req.params.name}, function(err,user) {
		 
		if(!user) {
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