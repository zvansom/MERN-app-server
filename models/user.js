// Require mongoose node module 
const mongoose = require('mongoose');

// Create the user Schema 
const userSchema = new mongoose.Schema({
	firstname: String, 
	lastname: String,  
	email: String, 
	image: String, 
	admin: Boolean
});

// Create and export the user model
module.exports = mongoose.model('User', userSchema);