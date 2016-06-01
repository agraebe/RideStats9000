const express = require('express');
const config = require('../config');
const port = 3000;
const app = express();

require('./middleware')(app, express);
require('./routes')(app);

app.listen(port, () => {
  console.log('UberStats listening on ' + port);
});
