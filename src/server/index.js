const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

require('./middleware')(app, express);
require('./routes')(app);

app.listen(port, () => {
  console.log('UberStats listening on ' + port);
});

module.exports = app;
