const Uber = require('node-uber');
const config = require('../../../config');
const { promisify } = require('../../utils');

const uber = new Uber({
  client_id: process.env.UBER_CLIENT_ID || config.uber.client_id,
  client_secret: process.env.UBER_CLIENT_SECRET || config.uber.client_secret,
  server_token: process.env.UBER_SERVER_TOKEN || config.uber.server_token,
  redirect_uri: process.env.UBER_REDIRECT_URI || config.uber.redirect_uri,
  name: process.env.UBER_NAME || config.uber.name,
  language: process.env.UBER_LANGUAGE || config.uber.language,
  sandbox: process.env.UBER_SANDBOX || config.uber.sandbox,
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

const removeCredentials = () => {
  uber.clearTokens();
};
const getAuthorizeUrl = () => uber.getAuthorizeUrl(config.uber.scope);

module.exports = {
  getUserProfile,
  getUserHistory,
  getRequestByID,
  getRequestReceiptByID,
  getCurrentRequest,
  storeCredentials,
  removeCredentials,
  getAuthorizeUrl,
};
