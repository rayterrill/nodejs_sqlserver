var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//use the PORT environment variable if it exists, or 3000
var PORT = process.env.PORT || 3000;

//import the db connection logic from db.js
var db = require('./db.js');

//set variable deployPath in web.config to match the virtual directory in IIS
//if app.js is run from command line (node app.js) deployPath is set to empty string.
var deployPath = process.env.deployPath || "";

//helper function to send Json response back
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//use the bodyParser package to decode json
app.use(bodyParser.json());

//get all the names
app.get(deployPath + '/names', function (req, res) {
	db.name.findAll().then(body => {
		res.send(body);
	});
});

//create a new name
app.post(deployPath + '/names', function (req, res) {
   db.name.create({
      name: req.body.name
   })
   .then(function (name) {
      res.status(201);
      res.json(name);
   })
   .catch(function (error) {
      res.status(500).json(error);
   });
});

//get a single name
app.get(deployPath + '/names/:id', function (req, res) {
   if (req.params && req.params.id) {
      db.name.find( { where: { id: req.params.id} } ).then(body => {
         if (body) {
            res.send(body);
         } else {
            sendJsonResponse(res, 404, {
               message: "No items found with specified locationid"
            });
         }
      });
   } else {
      sendJsonResponse(res, 404, {
         "message": "No locationid in request"
      });
   }
});

//update a name
app.put(deployPath + '/names/:id', function (req, res) {
   db.name.find({
      where: { id: req.params.id}
   })
   .then(function(name) {
      if (name) {
         name.name = req.body.name;
         name.save()
         .then(function(name) {
            res.status(200).json(name);
         })
         .catch(function(err) {
            res.status(404).json(err);
         });
      } else {
         sendJsonResponse(res, 404, {
            message: "No items found with specified locationid"
         });
      }   
   });
});   

//delete a name
app.delete(deployPath + '/names/:id', function (req, res) {
   db.name.destroy({
      where: { id: req.params.id }
   })
   .then(function() {
      res.sendStatus(204);
   })
   .catch(function() {
      res.status(500).json('Error encountered on delete');
   });
});

// change to db.sequelize.sync({force: true}) to force a model/schema change
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	});
});
