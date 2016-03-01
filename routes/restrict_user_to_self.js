function restrictUserToSelf(req, res, next) {
	
	console.log(JSON.stringify(req.session.user)+"$$$");
	console.log(req.session.user.username+"###");
	console.log(req.user.username+"@@@")
if ( !req.session.user || req.session.user.username !== req.user.username) {
res.send('Unnauthorized', 401); } else {
next(); }
}
module.exports = restrictUserToSelf;