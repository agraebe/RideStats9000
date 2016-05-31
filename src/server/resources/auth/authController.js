const { uber } = require('../uber/uberClient.js');
const { getAuthorizeUrl, storeCredentials } = require('../uber/uberClient.js');

const handleLogin = (req, res) => {
  const url = getAuthorizeUrl();
  res.redirect(url);
}

const handleCredentials = (req, res) => {
  const authorization_code = req.query.code;
  storeCredentials(authorization_code)
    .then((access_token, refresh_token) => res.redirect('/'))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  handleLogin,
  handleCredentials
};
