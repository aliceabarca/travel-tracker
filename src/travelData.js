import { travelFeePrecentage } from './scripts';

export function filteredTrips(userId, allTrips) {
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
  // console.log('past', pastTrips)
  // console.log('pending', pendingTrips)
  // console.log()
  return {
    all: userTrips,
    pending: pendingTrips,
    past: pastTrips,
    upcoming: upcomingTrips,
  };
}

export function calculateTripsCost(usersTrip, destinations) {
  const currentYear = new Date().getFullYear();

  const thisYearsTrips = usersTrip.filter(trip => {
    const tripYear = new Date(trip.date).getFullYear();
    return tripYear === currentYear;
  });

  let costOfAllTrips = 0;

  thisYearsTrips.forEach(trip => {
    const destID = trip.destinationID;
    const duration = trip.duration;

    destinations.forEach(location => {
      const costPerDay = location.estimatedLodgingCostPerDay;
      const flightCost = location.estimatedFlightCostPerPerson;
      if (destID === location.id) {
        const travelCost = costPerDay * duration;
        const cost = travelCost + flightCost;
        costOfAllTrips += cost;
      }
    });
  });

  const agentsFee = costOfAllTrips * travelFeePrecentage;

  return agentsFee;
}
