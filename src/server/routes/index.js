var authRouter = require('../resources/auth/authRouter.js');
var uberRouter = require('../resources/uber/uberRouter.js');

module.exports = function(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/uber', uberRouter);
}
