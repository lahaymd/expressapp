var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Bio = new Schema({
	username: String,
	name: String,
	bio: String,
	password: String
});
module.exports = mongoose.model('Bio', Bio);