const { getUserProfile, getUserHistory, getRequestByID, getRequestReceiptByID, getCurrentRequest } = require('./uberClient.js');
const { processHistories, generateRemainingQueryOffsets, generateStatistics } = require('./uberUtils.js');

const retrieveProfile = (req, res) => {
  getUserProfile()
    .then(profile => res.json({success: true, data: profile}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveHistory = (req, res) => {
  getUserHistory(0)
    .then(history => retrieveRemainingHistories(history))
    .then(histories => res.json({success: true, data: generateStatistics(processHistories(histories))}))
    .catch(message => {
      console.log(message);
      res.status(500).json({success: false, data: null, message})
    });
}

const retrieveRemainingHistories = data => {
  var offsets = generateRemainingQueryOffsets(data);
  var remainingHistoryQueries = offsets.map(offset => getUserHistory(offset));
  remainingHistoryQueries.unshift(data);
  return Promise.all(remainingHistoryQueries);
}

const retrieveRequestByID = (req, res) => {
  const id = req.params.request_id;
  getRequestByID(id)
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveRequestReceipt = (req, res) => {
  const id = req.params.request_id;
  getRequestReceiptByID(id)
    .then(receipt => res.json({success: true, data: receipt}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

const retrieveCurrentRequest = (req, res) => {
  getCurrentRequest()
    .then(request => res.json({success: true, data: request}))
    .catch(message => res.status(500).json({success: false, data: null, message}));
}

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveRequestByID,
  retrieveCurrentRequest,
  retrieveRequestReceipt
};
