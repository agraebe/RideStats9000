const generateOffsets = queriesRequired => {
  const offsets = [];
  for (var i = 0; i < queriesRequired; i++) {
    var offset = (i + 1) * 50;
    offsets.push(offset);
  }
  return offsets;
}

const generateRemainingQueryOffsets = data => {
  const remaining = data.count - 50;
  const queriesRequired = Math.ceil(remaining / 50);
  const offsets = generateOffsets(queriesRequired);
  return offsets;
}

const processHistories = histories => {
  return histories.reduce((first, current) => {
    first.history = first.history.concat(current.history);
    return first;
  });
}

module.exports = {
  generateRemainingQueryOffsets,
  processHistories
};
