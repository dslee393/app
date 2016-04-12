
var Sequelize = require('sequelize');
var sequelize = new Sequelize ('daniel', 'student', 'ilovetesting', {
	host: 'localhost',
	dialect: 'postgres'
});


var User = sequelize.define('user', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});



// sequelize.query("create table 'users' (name: varchar, password: varchar)").then(function(){
// 	console.log("hahaha");
// });

sequelize.sync({logging: console.log}).then(function(){
	
});

module.exports = User;