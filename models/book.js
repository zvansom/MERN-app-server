const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
	name: String, 
	year: Number
})

const bookSchema = new mongoose.Schema({
	title: String, 
	pages: Number,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	publisher: [publisherSchema]
});

// module.exports = mongoose.model('Book', bookSchema);