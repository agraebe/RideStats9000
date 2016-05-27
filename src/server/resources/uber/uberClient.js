const Uber = require('node-uber');
const request = require('request');
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

const retrieveUserProfile = promisify((callback) => {
  uber.user.getProfile(callback);
});

const retrieveUserHistory = promisify((offset, results, callback) => {
  uber.user.getHistory(offset, results, callback);
});

const retrieveRequestById = promisify((id, callback) => {
  uber.requests.getByID(id, callback);
});

const storeCredentials = promisify((authorization_code, callback) => {
  uber.authorization({ authorization_code }, callback);
});

const retrieveAuthorizeUrl = function() {
  return uber.getAuthorizeUrl(config.uber.scope);
}

module.exports = {
  uber,
  retrieveUserProfile,
  retrieveUserHistory,
  retrieveRequestById,
  retrieveAuthorizeUrl,
  storeCredentials
};