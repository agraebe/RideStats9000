const uber = require('../uber/uberClient.js');

const retrieveAuthorizedUrl = (req, res) => {
  const url = uber.getAuthorizeUrl(['history', 'profile', 'request', 'places']);
  res.redirect(url);
}

const handleAuthCallback = (req, res) => {
  const authorization_code = req.query.code;
  uber.authorization({ authorization_code }, (err, access_token, refresh_token) => {
    if (err) {
      return res.status(500).json(err);
    }
    // store the user id and associated access token
    // redirect the user back to your actual app
    res.redirect('/');
  });
}

module.exports = {
  retrieveAuthorizedUrl,
  handleAuthCallback
};
