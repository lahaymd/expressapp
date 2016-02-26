function restrictUserToSelf(req, res, next) {
if ( !req.session.user) {
res.send('Unnauthorized', 401); } else {
next(); }
}
module.exports = restrictUserToSelf;