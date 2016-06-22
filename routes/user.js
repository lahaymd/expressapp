var mongoose = require('mongoose');
var request = require('request');
var TIMESPAN_YEAR = 31536000000;
var TIMESPAN_18_YEARS = 18 * TIMESPAN_YEAR;
function validate_18_years_old_or_more(date) {
	return (Date.now() - date.getTime()) > TIMESPAN_18_YEARS; 
}


function twitterHandleExists(handle, done) {
request('http://twitter.com/' + encodeURIComponent(handle), function(err, res) {
if (err) { console.error(err); return done(false);
}
if (res.statusCode > 299) {
done(false);
} else {
done(true); }
}); }

var Schema = mongoose.Schema;
var User = new Schema({
	username: {type: String, unique: true},
	name: String,
	bio: String,
	image: {type: String, default: 'testing default'},
	password: String,
	email: {
		type: String,
		//required: true,
		validate: {
			validator: function(v) {
				return /.+\@.+\..+/.test(v);
			}

		}
	},
	gender: {
		type: String,
		//required: true,
		uppercase: true,
		'enum': ['M', 'F']
	},
	birthday: { type: Date, validate: [
	validate_18_years_old_or_more,
	'You must be 18 years old or more'] },
	twitter: {
type: String,
validate: [twitterHandleExists, 'Please provide a valid twitter handle'], set: function(handle) {
if (! handle) { return;
}
handle = handle.trim();
if (handle.indexOf('@') === 0) {
handle = handle.substring(1); }
return handle; }
},
meta: { 
	created_at: {
		type: Date,
		default: Date.now 
	},
	updated_at: {
		type: Date, 	
		default: Date.now
	} 
}
});



module.exports = mongoose.model('User', User);