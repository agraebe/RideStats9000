const { uber } = require('../uber/uberClient.js');
const { retrieveAuthorizeUrl, storeCredentials } = require('../uber/uberClient.js');

const handleLogin = (req, res) => {
  const url = retrieveAuthorizeUrl();
  res.redirect(url);
}

const handleUberCredentials = (req, res) => {
  const authorization_code = req.query.code;
  storeCredentials(authorization_code)
    .then((access_token, refresh_token) => {
      res.redirect('/')
    })
    .catch(err => res.status(500).json(err))

    // (err, access_token, refresh_token) => {
    // if (err) {
    //   return res.status(500).json(err);
    // }
    // // console.log(access_token, refresh_token);
    // // store the user id and associated access token
    // // redirect the user back to your actual app
    // res.redirect('/');
  // }
}

module.exports = {
  handleLogin,
  handleUberCredentials
};
