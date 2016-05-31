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

const generateStatistics = data => {
  const statistics = {
    numberOfTrips: data.count,
    tripsPerCity: {},
    timeSpentWaiting: 0,
    timeSpentRiding: 0,
    totalDistanceTraveled: 0,
    longestRide: {
      distance: 0,
      data: null
    },
  };
  return data.history.reduce((stats, currentTrip) => {
    var currentTripCity = currentTrip.start_city.display_name;
    if (!stats.tripsPerCity[currentTripCity]) {
      stats.tripsPerCity[currentTripCity] = 0;
    }
    stats.tripsPerCity[currentTripCity]++;
    stats.timeSpentWaiting += currentTrip.start_time - currentTrip.request_time;
    stats.timeSpentRiding += currentTrip.end_time - currentTrip.start_time;
    stats.totalDistanceTraveled += currentTrip.distance;
    if (stats.longestRide.distance < currentTrip.distance) {
      stats.longestRide.distance = currentTrip.distance;
      stats.longestRide.city = currentTripCity;
    }
    return stats;
  }, statistics)
}

module.exports = {
  generateRemainingQueryOffsets,
  generateStatistics,
  processHistories
};
