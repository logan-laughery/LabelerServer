const express = require("express");
const index = require("./index.js");
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
app.post('/', function(req, res) {
  index.getPdf(req, res);
});

app.listen(port);
console.log('Magic happens on port ' + port);
