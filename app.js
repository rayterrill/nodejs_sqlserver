var express = require('express');
var app = express();

//import the db connection logic from db.js
var db = require('./db.js');

app.get('/nodejs_sqlserver', function (req, res) {
	var body = { name: 'boomshakalaka' };
	db.name.create(body).then(body => {
		res.send(body);
	});
});

// change to db.sequelize.sync({force: true}) to force a model/schema change
db.sequelize.sync().then(function() {
	app.listen(process.env.PORT, function() {
		console.log('Express listening on port ' + process.env.PORT + '!');
	});
});
