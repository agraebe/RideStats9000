var uberRouter = require('express').Router();
var { retrieveProfile, retrieveHistory, retrieveRequestByID, retrieveRequestReceipt, retrieveCurrentRequest } = require('./uberController.js');
var uber = require('./uberClient.js');

uberRouter.route('/profile')
  .get(retrieveProfile);

uberRouter.route('/history')
  .get(retrieveHistory);

uberRouter.route('/requests/:request_id')
  .get(retrieveRequestByID);

uberRouter.route('/requests/:request_id/receipt')
  .get(retrieveRequestReceipt);

uberRouter.route('/requests/current')
  .get(retrieveCurrentRequest);

module.exports = uberRouter;
