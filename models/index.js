// Require Mongoose node module
const mongoose = require('mongoose'); 

// Connect to your Mongoose database
mongoose.connect(process.env.MONGOOSE_URL || 'mongodb://localhost:27017/hellowdi20', { useNewUrlParser: true });

// Gather up your models 
module.exports.User = require('./user');
