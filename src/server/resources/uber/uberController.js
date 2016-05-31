const { retrieveUserProfile, retrieveUserHistory, retrieveRequestById, retrieveCurrentRequest } = require('./uberClient.js');
const { processHistories, generateRemainingQueryOffsets } = require('./uberUtils.js');

const retrieveProfile = (req, res) => {
  retrieveUserProfile()
    .then(profile => res.json({success: true, data: profile}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveHistory = (req, res) => {
  retrieveUserHistory(0)
    .then(history => retrieveRemainingHistories(history))
    .then(histories => res.json({success: true, data: processHistories(histories)}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveRemainingHistories = data => {
  var offsets = generateRemainingQueryOffsets(data);
  var remainingHistoryQueries = offsets.map(offset => retrieveUserHistory(offset));
  remainingHistoryQueries.unshift(data);
  return Promise.all(remainingHistoryQueries);
}

const retrieveRequest = (req, res) => {
  const id = req.params.request_id;
  retrieveRequestById(id)
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveRequestCurrent = (req, res) => {
  retrieveCurrentRequest()
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveRequestCurrent,
  retrieveRequest
};
