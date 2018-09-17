// Require mongoose node module 
const mongoose = require('mongoose');

// Create the user Schema 
const userSchema = new mongoose.Schema({
	name: String, 
	image: String,  
	birthyear: Number, 
	admin: Boolean
});

// Create and export the user model
module.exports = mongoose.model('User', userSchema);