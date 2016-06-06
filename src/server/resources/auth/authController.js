const { getAuthorizeUrl, storeCredentials } = require('../uber/uberClient.js');

const handleLogin = (req, res) => {
  const url = getAuthorizeUrl();
  res.json({ url });
}

const handleCredentials = (req, res) => {
  const authorization_code = req.query.code;
  console.log(authorization_code);
  storeCredentials(authorization_code)
    .then(tokens => res.redirect('/#/loading'))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
}

module.exports = {
  handleLogin,
  handleCredentials
};
