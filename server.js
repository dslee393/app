var http = require('http');
var express = require('express');
var app = express();
var db = require('./database');
var fs = require('fs');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize ('daniel', 'student', 'ilovetesting', {
	host: 'localhost',
	dialect: 'postgres'
});

var server = http.createServer(app);

app.use(express.static(__dirname + '/'));

app.use(bodyParser());

app.get('/', function(request, response){
	response.sendFile(__dirname + '/homepage.html');
});

app.get('/signup', function(request, response){
	response.sendFile(__dirname + '/signup.html');
});

app.get('/login', function(request, response){
	response.sendFile(__dirname + '/login.html')
});

app.get('/santaMonica', function(request, response){
	db.Beaches.update({SaMoLikes: 1}, {where: {id: 1}});
	response.sendFile(__dirname + '/santaMonica.html');
	//response.sendFile(__dirname + '/styles.css');
});

app.get('/venice', function(request, response){
	response.sendFile(__dirname + '/venice.html')
});

app.get('/dockweiler', function(request, response){
	response.sendFile(__dirname + '/dockweiler.html')
});


app.post('/yourProfile', function(request, response){
	
	if(request.body.Lusername && request.body.Lpassword){
		if(request.body.Lusername.length >= 3 && request.body.Lpassword.length >= 3){
			db.User.findAll({where: {username: request.body.Lusername}}).then(function(matches){
				 if(matches.length === 0){
				 		response.redirect('/login');
				 }
				 if(matches[0].dataValues.password !== request.body.Lpassword){
				 		response.redirect('/login');
				 }
				 if(matches[0].dataValues.password === request.body.Lpassword && matches[0].dataValues.username === request.body.Lusername){
				 	response.sendFile(__dirname + '/yourProfile.html');
				 }
				});
		}
	}

	if(request.body.username && request.body.password){
		db.User.findAll({where: {username: request.body.username}}).then(function(matches){
			if(matches.length > 0){
				response.redirect('/signup');
			} else {
					if(request.body.username.length >= 3 && request.body.password.length >= 3){
						db.User.create({username: request.body.username, password: request.body.password,
							likesSaMo: "off", dislikesSaMo: "off", likesVenice: "off",
							dislikesVenice: "off", likesDockweiler: "off", dislikesDockweiler: "off" });
						response.sendFile(__dirname + '/yourProfile.html');
					} else {
						response.redirect('/signup');
					}
			}
		});
	}

});


app.listen(3000);