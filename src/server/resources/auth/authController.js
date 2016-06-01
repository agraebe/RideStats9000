const { uber } = require('../uber/uberClient.js');
const { getAuthorizeUrl, storeCredentials } = require('../uber/uberClient.js');

const handleLogin = (req, res) => {
  const url = getAuthorizeUrl();
  res.json({ url });
}

const handleCredentials = (req, res) => {
  const authorization_code = req.query.code;
  storeCredentials(authorization_code)
    .then(tokens => res.redirect('/'))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  handleLogin,
  handleCredentials
};
