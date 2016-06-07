const authRouter = require('../resources/auth/authRouter.js');
const uberRouter = require('../resources/uber/uberRouter.js');

module.exports = app => {
  app.use('/api/auth', authRouter);
  app.use('/api/uber', uberRouter);
};
