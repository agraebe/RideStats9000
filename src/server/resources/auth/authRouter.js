const authRouter = require('express').Router();
const { handleLogin, handleCredentials } = require('./authController.js');

authRouter.route('/login')
  .get(handleLogin);

authRouter.route('/callback')
  .get(handleCredentials);

module.exports = authRouter;
