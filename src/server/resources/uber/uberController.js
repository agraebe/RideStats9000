const { getUserProfile, getUserHistory, getRequestByID, getRequestReceiptByID, getCurrentRequest, removeCredentials } = require('./uberClient');
const { processHistories, generateRemainingQueryOffsets, generateStatistics } = require('./uberUtils');

const retrieveProfile = (req, res) => {
  getUserProfile()
    .then(profile => res.json({ success: true, data: profile }))
    .then(() => deleteCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

const retrieveRemainingHistories = data => {
  const offsets = generateRemainingQueryOffsets(data);
  const remainingHistoryQueries = offsets.map(offset => getUserHistory(offset));
  remainingHistoryQueries.unshift(data); // Add first (already completed) dataset to front of promise array to use as base
  return Promise.all(remainingHistoryQueries);
};

const retrieveHistory = (req, res) => {
  getUserHistory(0)
    .then(history => retrieveRemainingHistories(history))
    .then(histories => res.json({ success: true, data: processHistories(histories) }))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

// TODO: Abstract retrieveStatistics and retrieveHistory
const retrieveStatistics = (req, res) => {
  getUserHistory(0)
    .then(history => retrieveRemainingHistories(history))
    .then(histories => res.json({ success: true, data: generateStatistics(processHistories(histories)) }))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

const retrieveRequestByID = (req, res) => {
  const id = req.params.request_id;
  getRequestByID(id)
    .then(request => res.json({ success: true, data: request }))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

const retrieveRequestReceipt = (req, res) => {
  const id = req.params.request_id;
  getRequestReceiptByID(id)
    .then(receipt => res.json({ success: true, data: receipt }))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

const retrieveCurrentRequest = (req, res) => {
  getCurrentRequest()
    .then(request => res.json({ success: true, data: request }))
    .catch(message => res.status(500).json({ success: false, data: null, message }))
    .then(() => removeCredentials());
};

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveStatistics,
  retrieveRequestByID,
  retrieveCurrentRequest,
  retrieveRequestReceipt,
};
