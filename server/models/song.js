var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	title: String,
	artist: String,
	album: String,
	genre: String
})

var Song = mongoose.model('Song', songSchema);