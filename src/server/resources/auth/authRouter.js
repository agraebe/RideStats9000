var authRouter = require('express').Router();
var authController = require('./authController.js');

authRouter.route('/login')
  .get(authController.retrieveAuthorizedUrl);

authRouter.route('/callback')
  .get(authController.handleAuthCallback);

module.exports = authRouter;