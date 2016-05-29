const express = require('express');
const config = require('../config');
const port = 3000;
const app = express();

require('./middleware')(app);
require('./routes')(app);

app.get('/', (req, res) => {
  res.json({message: 'placeholder'});
});

app.listen(port, () => {
  console.log('RideEye listening on ' + port);
})
