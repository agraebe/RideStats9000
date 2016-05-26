const express = require('express');
const config = require('../config');
const port = 3000;
const app = express();

require('./middleware')(app);
require('./routes')(app);

app.get('/', function(req, res) {
  res.json({message: 'placeholder'});
});

app.listen(port, function() {
  console.log('RideEye listening on ' + port);
})