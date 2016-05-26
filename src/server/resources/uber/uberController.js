const { retrieveProfile, retrieveHistory, retrieveRequestById } = require('./uberClient.js');

const handleProfileGet = (req, res) => {
  retrieveProfile()
    .then(profile => res.json({success: true, data: profile}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const handleHistoryGet = (req, res) => {
  offset = req.query.offset || 0;
  results = req.query.results || 50;
  retrieveHistory(offset, results)
    .then(history => res.json({success: true, data: history}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}
const handleRequestGet = (req, res) => {
  const id = req.params.request_id;
  retrieveRequestById(id)
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

module.exports = {
  handleProfileGet,
  handleHistoryGet,
  handleRequestGet
}