const generateDemoData = () => ({
  numberOfTrips: 185,
  tripsPerCity: {
    'San Francisco': 140,
    'Los Angeles': 39,
    Portland: 4,
    'New Orleans': 2,
  },
  timeSpentRiding: 102370,
  timeSpentWaiting: 47377,
  longestRide: {
    city: 'Los Angeles',
    distance: 24.662265066,
  },
  totalDistanceTraveled: 399.1359926652999,
  tripsPerDay: [38, 21, 13, 23, 20, 15, 55],
  tripsPerHour: [25, 21, 9, 2, 2, 2, 2, 4, 4, 4, 2, 8, 6, 3, 4, 3, 4, 2, 7, 8, 15, 10, 18, 20]
});

module.exports = {
  generateDemoData,
};
