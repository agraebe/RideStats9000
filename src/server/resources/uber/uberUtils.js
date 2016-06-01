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

const getTripDay = startTime => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const date = new Date(startTime * 1000);
  const dayInt = date.getDay();
  return days[dayInt];
}

const generateStatistics = data => {
  const statistics = {
    numberOfTrips: data.count,
    tripsPerCity: {},
    tripsPerDay: {},
    timeSpentWaiting: 0,
    timeSpentRiding: 0,
    totalDistanceTraveled: 0,
    longestRide: {
      distance: 0,
      city: null
    },
  };
  return data.history.reduce((stats, currentTrip) => {
    // Record currentTrip's start city
    const currentTripCity = currentTrip.start_city.display_name;
    if (!stats.tripsPerCity[currentTripCity]) {
      stats.tripsPerCity[currentTripCity] = 0;
    }
    stats.tripsPerCity[currentTripCity]++;

    // Record currentTrip's day of the week
    const currentTripDay = getTripDay(currentTrip.start_time);
    if (!stats.tripsPerDay[currentTripDay]) {
      stats.tripsPerDay[currentTripDay] = 0;
    }
    stats.tripsPerDay[currentTripDay]++;

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
  }, statistics)
}

module.exports = {
  generateRemainingQueryOffsets,
  generateStatistics,
  processHistories
};
