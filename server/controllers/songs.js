var mongoose = require('mongoose');

var Song = mongoose.model('Song');

var songController = {};

songController.getSongs = function(req, res){
	Song.find({}, function(err, songs){
		if(err){
			console.log('something went wrong');
		}else{
			console.log('retrieved songs successfully');
			res.render('index',{songs: songs});
		}
	})
}

songController.addSong = function(req, res){
	var song = new Song({title: req.body.title, artist: req.body.artist, album: req.body.album, genre: req.body.genre});
	console.log('POST DATA:', req.body);
	song.save(function(err){
		if(err){
			console.log('song not added successfully');
		}else{
			console.log('song added successfully!');
			res.redirect('/');
		}
	})
}

songController.findSong = function(req, res){
	Song.findOne({_id: req.params.id}, function(err, song){
		res.render('songpage', {song: song});
	})
}

songController.editSong = function(req, res){
	Song.findOne({_id: req.params.id}, function(err, song){
		res.render('edit', {song: song});
	})
}

songController.updateSong = function(req, res){
	Song.update({_id: req.params.id}, {title: req.body.title, artist: req.body.artist, album: req.body.album, genre: req.body.genre}, function(err, song){
		if(err){
			console.log('error updating song');
		}else{
			console.log('song successfully updated');
			res.redirect('/songs/'+req.params.id);
		}
	})
}

songController.remove = function(req, res){
	Song.remove({_id: req.params.id}, function(err, song){
		if(err){
			console.log('song has not been deleted');
		}else{
			console.log('song deleted successfully');
			res.redirect('/');
		}
	})
}

//export songController
module.exports = songController;