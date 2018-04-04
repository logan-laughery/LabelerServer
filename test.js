const express = require("express");
const index = require("./index.js");
const bodyParser = require('body-parser');
const cors = require("cors");

let app = express();

app.use(cors({ origin: true, exposedHeaders: 'Content-Disposition' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
app.post('/', function(req, res) {
  console.log('generating pdf');
  index.getPdf(req, res);
});
app.get('/', function(req, res) {
  console.log('generating pdf');
  index.getPdf(req, res);
});

app.listen(port);
console.log('Magic happens on port ' + port);
