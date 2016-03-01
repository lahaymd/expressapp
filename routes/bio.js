var mongoose = require('mongoose');
//var emailRegexp = /.+\@.+\..+/;
var Schema   = mongoose.Schema;
var Bio = new Schema({
	username: {type: String, unique: true},
	name: String,
	bio: String,
	password: String,
	email: {
		type: String,
		required: true,
		validate: {
			validator: function(v) {
				return /.+\@.+\..+/.test(v);
			}

		}
	}
});
module.exports = mongoose.model('Bio', Bio);