const { getUserProfile, getUserHistory, getRequestByID, getRequestReceiptByID, getCurrentRequest, removeCredentials } = require('./uberClient');
const { processHistories, generateRemainingQueryOffsets, generateStatistics } = require('./uberUtils');

const retrieveProfile = (req, res) => {
  getUserProfile()
    .then(profile => res.json({ success: true, data: profile }))
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
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
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
};

const retrieveStatistics = (req, res) => {
  getUserHistory(0)
    .then(history => retrieveRemainingHistories(history))
    .then(histories => res.json({ success: true, data: generateStatistics(processHistories(histories)) }))
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
};

const retrieveRequestByID = (req, res) => {
  const id = req.params.request_id;
  getRequestByID(id)
    .then(request => res.json({ success: true, data: request }))
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
};

const retrieveRequestReceipt = (req, res) => {
  const id = req.params.request_id;
  getRequestReceiptByID(id)
    .then(receipt => res.json({ success: true, data: receipt }))
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
};

const retrieveCurrentRequest = (req, res) => {
  getCurrentRequest()
    .then(request => res.json({ success: true, data: request }))
    .then(() => removeCredentials())
    .catch(message => res.status(500).json({ success: false, data: null, message }));
};

module.exports = {
  retrieveProfile,
  retrieveHistory,
  retrieveStatistics,
  retrieveRequestByID,
  retrieveCurrentRequest,
  retrieveRequestReceipt,
};
