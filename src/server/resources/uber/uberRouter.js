var uberRouter = require('express').Router();
var { retrieveProfile, retrieveHistory, retrieveRequest, retrieveRequestCurrent } = require('./uberController.js');
var uber = require('./uberClient.js');

uberRouter.route('/profile')
  .get(retrieveProfile);

uberRouter.route('/history')
  .get(retrieveHistory);

uberRouter.route('/requests/current')
  .get(retrieveRequestCurrent);

uberRouter.route('/requests/:request_id')
  .get(retrieveRequest);

module.exports = uberRouter;
