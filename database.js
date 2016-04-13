
var Sequelize = require('sequelize');
var sequelize = new Sequelize ('daniel', 'student', 'ilovetesting', {
	host: 'localhost',
	dialect: 'postgres'
});

var Tables = {

  User: sequelize.define('user', {
		username: Sequelize.STRING,
		password: Sequelize.STRING,
		likesSaMo: Sequelize.STRING,
		dislikesSaMo: Sequelize.STRING,
		likesVenice: Sequelize.STRING,
		dislikesVenice: Sequelize.STRING,
		likesDockweiler: Sequelize.STRING,
		dislikesDockweiler: Sequelize.STRING
	}),

  Beaches: sequelize.define('beach', {
		SaMoLikes: Sequelize.INTEGER,
		SaMoDislikes: Sequelize.INTEGER,
		VeniceLikes: Sequelize.INTEGER,
		VeniceDislikes: Sequelize.INTEGER,
		DockweilerLikes: Sequelize.INTEGER,
		DockweilerDislikes: Sequelize.INTEGER 
	})

}

Tables.Beaches.count().then(function(c){
	if(c === 0){
		Tables.Beaches.create({
			SaMoLikes: 0,
			SaMoDislikes: 0,
			VeniceLikes: 0,
			VeniceDislikes: 0,
			DockweilerLikes: 0,
			DockweilerDislikes: 0 
		});
	}
});




// sequelize.query("create table 'users' (name: varchar, password: varchar)").then(function(){
// 	console.log("hahaha");
// });

sequelize.sync({logging: console.log}).then(function(){
	
});

module.exports = Tables;