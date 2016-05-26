var uberRouter = require('express').Router();
var uberController = require('./uberController.js');

uberRouter.route('/profile')
  .get((req, res) => {
    uberController.retrieveProfile()
      .then(profile => res.json({success: true, data: profile}))
      .catch(message => res.status(500).json({success: false, data: null, message}));
  });

uberRouter.route('/history')
  .get((req, res) => {
    offset = req.query.offset || 0;
    results = req.query.results || 50;
    uberController.retrieveHistory(offset, results)
      .then(history => res.json({success: true, data: history}))
      .catch(message => res.status(500).json({success: false, data: null, message}));
  });

uberRouter.route('/request/:request_id')
  .get((req, res) => {
    const id = req.params.id;
    uberController.retrieveRequestById(id)
      .then(request => res.json({success: true, data: request}))
      .catch(message => res.status(500).json({success: false, data: null, message}));
  });

module.exports = uberRouter;
