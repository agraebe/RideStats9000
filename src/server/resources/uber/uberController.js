const uber = require('./uberClient.js');
const { promisify } = require('../../utils');

const _retrieveProfile = function(callback) {
  uber.user.getProfile(callback);
}
const retrieveProfile = promisify(_retrieveProfile);

const _retrieveHistory = function(offset, results, callback) {
  uber.user.getHistory(offset, results, callback);
}
const retrieveHistory = promisify(_retrieveHistory);

const _retrieveRequestById = function(id, callback) {
  uber.requests.getByID(id, callback);
}
const retrieveRequestById = promisify(_retrieveRequestById);

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveRequestById
}