var uber = require('../uber/uberClient.js');

var retrieveAuthorizedUrl = (req, res) => {
  var url = uber.getAuthorizeUrl(['history', 'profile', 'request', 'places']);
  res.redirect(url);
}

var handleAuthCallback = (req, res) => {
  uber.authorization({
    authorization_code: req.query.code
  }, (err, access_token, refresh_token) => {
    if (err) {
      return console.error(err);
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
