const Uber = require('node-uber');
const config = require('../../../config');
const { promisify } = require('../../utils');

const uber = new Uber({
  client_id: config.uber.client_id,
  client_secret: config.uber.client_secret,
  server_token: config.uber.server_token,
  redirect_uri: config.uber.redirect_uri,
  name: config.uber.name,
  language: config.uber.language,
  sandbox: config.uber.sandbox
});

const retrieveProfile = promisify((callback) => {
  uber.user.getProfile(callback);
});

const retrieveHistory = promisify((offset, results, callback) => {
  uber.user.getHistory(offset, results, callback);
});

const retrieveRequestById = promisify((id, callback) => {
  uber.requests.getByID(id, callback);
});

const retrieveAuthorizeUrl = function() {
  return uber.getAuthorizeUrl(['history', 'profile', 'all_trips', 'request', 'request_receipt', 'places']);
}

const storeCredentials = promisify((authorization_code, callback) => {
  uber.authorization({ authorization_code }, callback);
});

module.exports = {
  uber,
  retrieveProfile,
  retrieveHistory,
  retrieveRequestById,
  retrieveAuthorizeUrl,
  storeCredentials
};