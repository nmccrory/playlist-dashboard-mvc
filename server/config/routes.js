var songs = require('../controllers/songs.js');

module.exports = function (app){
	app.get('/', function(req, res){
		songs.getSongs(req,res);
	})
	app.post('/songs', function(req, res){
		songs.addSong;
	})
	app.get('/songs/new', function(req, res){
		res.render('create');
	})

	app.get('/songs/:id', function(req, res){
		songs.findSong(req, res);
	})
	app.get('/songs/:id/edit', function(req, res){
		songs.editSong(req, res);
	})
	app.post('/songs/:id', function(req, res){
		songs.update(req, res);
	})

	app.get('/songs/:id/destroy', function(req, res){
		songs.remove(req, res);
	})
}