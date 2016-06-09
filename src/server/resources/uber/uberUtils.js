const generateOffsets = queriesRequired => {
  const offsets = [];
  for (let i = 0; i < queriesRequired; i++) {
    const offset = (i + 1) * 50;
    offsets.push(offset);
  }
  return offsets;
};

const generateRemainingQueryOffsets = data => {
  const remaining = data.count - 50;
  const queriesRequired = Math.ceil(remaining / 50);
  const offsets = generateOffsets(queriesRequired);
  return offsets;
};

const processHistories = histories => histories.reduce((first, current) => {
  first.history = first.history.concat(current.history);
  return first;
});

const getTripDay = startTime => {
  const date = new Date(startTime * 1000);
  return date.getDay();
};

const getTripHour = startTime => {
  const date = new Date(startTime * 1000);
  return date.getHours();
}

const generateStatistics = data => {
  const statistics = {
    numberOfTrips: data.count,
    tripsPerCity: {},
    tripsPerDay: [0, 0, 0, 0, 0, 0, 0],
    tripsPerHour: {},
    timeSpentWaiting: 0,
    timeSpentRiding: 0,
    totalDistanceTraveled: 0,
    longestRide: {
      distance: 0,
      city: null,
    },
  };
  return data.history.reduce((stats, currentTrip) => {
    // Record currentTrip's start city
    const currentTripCity = currentTrip.start_city.display_name;
    if (!stats.tripsPerCity[currentTripCity]) {
      stats.tripsPerCity[currentTripCity] = 0;
    }
    stats.tripsPerCity[currentTripCity]++;

    // Record currentTrip's day
    const currentTripDay = getTripDay(currentTrip.start_time);
    stats.tripsPerDay[currentTripDay]++;

    // Record currentTrip's hour
    const currentTripHour = getTripHour(currentTrip.start_time);
    stats.tripsPerHour[currentTripHour]++;

    // Record currentTrip's wait time, ride time, and distance
    stats.timeSpentWaiting += currentTrip.start_time - currentTrip.request_time;
    stats.timeSpentRiding += currentTrip.end_time - currentTrip.start_time;
    stats.totalDistanceTraveled += currentTrip.distance;

    // Check if currentTrip is the longest
    if (stats.longestRide.distance < currentTrip.distance) {
      stats.longestRide.distance = currentTrip.distance;
      stats.longestRide.city = currentTripCity;
    }

    return stats;
  }, statistics);
};

module.exports = {
  generateRemainingQueryOffsets,
  generateStatistics,
  processHistories,
};
