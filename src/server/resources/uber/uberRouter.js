var uberRouter = require('express').Router();
var uberController = require('./uberController.js');

uberRouter.route('/profile')
  .get((req, res) => {
    uberController.retrieveProfile()
      .then(profile => res.json(profile))
      .catch(err => res.status(500).json(err.body));
  });

uberRouter.route('/history')
  .get((req, res) => {
    uberController.retrieveHistory()
      .then(history => res.json(history))
      .catch(err => res.status(500).json(err.body));
  });

uberRouter.route('/request/:request_id')
  .get((req, res) => {
    var id = req.params.id;
    uberController.retrieveRequestById(id)
      .then(request => res.json(request))
      .catch(err => res.status(500).json(err.body));
  });

module.exports = uberRouter;
