var mongoose = require('mongoose');
var collectionName = "collection_name";
var userSchema = mongoose.Schema({
	username: String,
	password: String
});
module.exports = mongoose.model('User', userSchema, collectionName)