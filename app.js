var express = require('express');
var app = express();

//import the db connection logic from db.js
var db = require('./db.js');

app.get('/nodejs_sqlserver', function (req, res) {
	db.sql.connect(db.config).then(pool => {
    	return pool.request()
		.query('select id, name from dbo.names')
	}).then(result => {
		res.send(result);
	}).catch(err => {
		res.send('something bad just happened' + err);
	})
 
	db.sql.on('error', err => {
		// ... error handler 
	})
});

app.listen(process.env.PORT);