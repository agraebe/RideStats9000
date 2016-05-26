const Uber = require('node-uber');
const config = require('../../../config');

const uber = new Uber({
  client_id: config.uber.client_id,
  client_secret: config.uber.client_secret,
  server_token: config.uber.server_token,
  redirect_uri: config.uber.redirect_uri,
  name: config.uber.name,
  language: config.uber.language,
  sandbox: config.uber.sandbox
});

module.exports = uber;