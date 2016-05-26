var uberRouter = require('express').Router();
var uberController = require('./uberController.js');
var uber = require('./uberClient.js');

uberRouter.route('/profile')
  .get(uberController.handleProfileGet);

uberRouter.route('/history')
  .get(uberController.handleHistoryGet);

uberRouter.route('/requests/:request_id')
  .get(uberController.handleRequestGet);

module.exports = uberRouter;
