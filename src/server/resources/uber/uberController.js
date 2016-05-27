const { retrieveUserProfile, retrieveUserHistory, retrieveRequestById } = require('./uberClient.js');

const retrieveProfile = (req, res) => {
  retrieveUserProfile()
    .then(profile => res.json({success: true, data: profile}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const generateHistoryQuery = (limit) => {

}

const retrieveHistory = (req, res) => {
  offset = req.query.offset || 0;
  retrieveUserHistory(offset, 50)
    .then(history => {
      res.json({success: true, data: history})
    })
    .catch(message => res.status(500).json({success: false, data: null, message}));
}
const retrieveRequest = (req, res) => {
  const id = req.params.request_id;
  retrieveRequestById(id)
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveRequest
}