export function filteredTrips(userId, allTrips) {
  if (userId > 50) {
    return 'No user found'
  }
  const userTrips = allTrips.filter(trip => {
    return trip.userID === userId;
  });

  const pendingTrips = userTrips.filter(trip => {
    return trip.status === 'pending';
  });

  const pastTrips = userTrips.filter(trip => {
    const tripDate = new Date(trip.date).getTime();
    const todaysDate = new Date().getTime();
    return tripDate < todaysDate && trip.status === 'approved';
  });

  const upcomingTrips = userTrips.filter(trip => {
    const tripDate = new Date(trip.date).getTime();
    const todaysDate = new Date().getTime();
    return tripDate > todaysDate && trip.status === 'approved';
  });

  return {
    all: userTrips,
    pending: pendingTrips,
    past: pastTrips,
    upcoming: upcomingTrips,
  };
}

export function calculateTripsCost(usersTrip, destinations) {
  if (!usersTrip || !destinations) {
    return 'Missing Information'
  }
  const currentYear = new Date().getFullYear();

  const thisYearsTrips = usersTrip.filter(trip => {
    const tripYear = new Date(trip.date).getFullYear();
    return tripYear === currentYear;
  });

  let costOfAllTrips = 0;

  thisYearsTrips.forEach(trip => {
    const destID = trip.destinationID;
    const duration = trip.duration;
    const travelers = trip.travelers

    destinations.forEach(location => {
      const costPerDay = location.estimatedLodgingCostPerDay;
      const flightCost = location.estimatedFlightCostPerPerson * travelers
      if (destID === location.id) {
        const travelCost = costPerDay * duration;
        const cost = travelCost + flightCost;
        costOfAllTrips += cost;
      }
    });
  });
  const agentsFee = costOfAllTrips * 1.1;

  return agentsFee.toFixed(2);
}

