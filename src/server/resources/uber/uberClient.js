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

const getUserProfile = promisify(callback => {
  uber.user.getProfile(callback);
});

const getUserHistory = promisify((offset, callback) => {
  uber.user.getHistory(offset, 50, callback);
});

const getRequestByID = promisify((id, callback) => {
  uber.requests.getByID(id, callback);
});

const getRequestReceiptByID = promisify((id, callback) => {
  uber.requests.getReceiptByID(id, callback);
});

const getCurrentRequest = promisify(callback => {
  uber.requests.getCurrent(callback);
});

const storeCredentials = promisify((authorization_code, callback) => {
  uber.authorization({ authorization_code }, callback);
});

const getAuthorizeUrl = () => uber.getAuthorizeUrl(config.uber.scope);

module.exports = {
  uber,
  getUserProfile,
  getUserHistory,
  getRequestByID,
  getRequestReceiptByID,
  getCurrentRequest,
  storeCredentials,
  getAuthorizeUrl
};
