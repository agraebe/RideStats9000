const uberRouter = require('express').Router();
const {
  retrieveProfile,
  retrieveHistory,
  retrieveStatistics,
  retrieveRequestByID,
  retrieveRequestReceipt,
  retrieveCurrentRequest,
} = require('./uberController.js');

uberRouter.route('/profile')
  .get(retrieveProfile);

uberRouter.route('/history')
  .get(retrieveHistory);

uberRouter.route('/statistics')
  .get(retrieveStatistics);

uberRouter.route('/requests/:request_id')
  .get(retrieveRequestByID);

uberRouter.route('/requests/:request_id/receipt')
  .get(retrieveRequestReceipt);

uberRouter.route('/requests/current')
  .get(retrieveCurrentRequest);

module.exports = uberRouter;
