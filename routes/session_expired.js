function sessionExpired(req, res, next) { 
	if (req.session.maxAge < 1 ) {
		res.send('Session expired due to inactivity.', 403); 
	} else {
		next(); 
	}
}
module.exports = sessionExpired;