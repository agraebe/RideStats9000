var authRouter = require('express').Router();
var { handleLogin, handleCredentials } = require('./authController.js');

authRouter.route('/login')
  .get(handleLogin);

authRouter.route('/callback')
  .get(handleCredentials);

module.exports = authRouter;