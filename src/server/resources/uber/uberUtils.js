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
};

const updateTripsPerCity = (tripsPerCity, currentTrip) => {
  const nextTripsPerCity = Object.assign({}, tripsPerCity);
  const currentTripCity = currentTrip.start_city.display_name;
  if (!nextTripsPerCity[currentTripCity]) {
    nextTripsPerCity[currentTripCity] = 0;
  }
  nextTripsPerCity[currentTripCity]++;
  return nextTripsPerCity;
};

const updateTripsPerDay = (tripsPerDay, currentTrip) => {
  const currentTripDay = getTripDay(currentTrip.start_time);
  return tripsPerDay.map((count, day) => {
    if (currentTripDay === day) {
      return ++count;
    }
    return count;
  });
};

const updateTripsPerHour = (tripsPerHour, currentTrip) => {
  const currentTripHour = getTripHour(currentTrip.start_time);
  return tripsPerHour.map((count, hour) => {
    if (currentTripHour === hour) {
      return ++count;
    }
    return count;
  });
};

const updateTimeSpentWaiting = (timeSpentWaiting, currentTrip) => {
  return timeSpentWaiting + currentTrip.start_time - currentTrip.request_time;
};

const updateTimeSpentRiding = (timeSpentRiding, currentTrip) => {
  return timeSpentRiding + currentTrip.end_time - currentTrip.start_time;
};

const updateTotalDistanceTraveled = (totalDistanceTraveled, currentTrip) => {
  return totalDistanceTraveled + currentTrip.distance;
};

const updateLongestRide = (longestRide, currentTrip) => {
  if (longestRide.distance < currentTrip.distance) {
    return {
      distance: currentTrip.distance,
      city: currentTrip.city,
    }
  }
  return longestRide;
};

const generateStatistics = data => {
  const statistics = {
    numberOfTrips: data.count,
    tripsPerCity: {},
    tripsPerDay: [0, 0, 0, 0, 0, 0, 0],
    tripsPerHour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    timeSpentWaiting: 0,
    timeSpentRiding: 0,
    totalDistanceTraveled: 0,
    longestRide: {
      distance: 0,
      city: null,
    },
  };
  return data.history.reduce((stats, currentTrip) => {
    stats.tripsPerCity = updateTripsPerCity(stats.tripsPerCity, currentTrip);
    stats.tripsPerDay = updateTripsPerDay(stats.tripsPerDay, currentTrip);
    stats.tripsPerHour = updateTripsPerHour(stats.tripsPerHour, currentTrip);
    stats.timeSpentWaiting = updateTimeSpentWaiting(stats.timeSpentWaiting, currentTrip);
    stats.timeSpentRiding = updateTimeSpentRiding(stats.timeSpentRiding, currentTrip);
    stats.totalDistanceTraveled = updateTotalDistanceTraveled(stats.totalDistanceTraveled, currentTrip);
    stats.longestRide = updateLongestRide(stats.longestRide, currentTrip);
    return stats;
  }, statistics);
};

module.exports = {
  generateRemainingQueryOffsets,
  generateStatistics,
  processHistories,
  updateTripsPerCity,
  updateTripsPerDay,
  updateTripsPerHour,
  updateTimeSpentWaiting,
  updateTimeSpentRiding,
  updateTotalDistanceTraveled,
  updateLongestRide,
};
