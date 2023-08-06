export function filteredTrips(userId, allTrips) {
  // rename function later
  const userTrips = allTrips.filter(trip => {
    return trip.userID === userId
  });

  const pendingTrips = userTrips.filter(trip => {
   return trip.status === 'pending'
  })

  const pastTrips = userTrips.filter(trip => {
    const tripDate = new Date(trip.date).getTime()
    const todaysDate = new Date().getTime()
    return tripDate < todaysDate && trip.status === 'approved'
  })

  const upcomingTrips = userTrips.filter(trip => {
    const tripDate = new Date(trip.date).getTime()
    const todaysDate = new Date().getTime()
    return tripDate > todaysDate && trip.status === 'approved'
  })

  return {
    all: userTrips,
    pending: pendingTrips,
    past: pastTrips,
    upcoming: upcomingTrips,
  }
}

export function calculateTripsCost(usersTrip, destinations) {
  const currentYear = new Date().getFullYear();

  const thisYearsTrips = usersTrip.filter(trip => {
    const tripYear = new Date(trip.date).getFullYear();
    return tripYear === currentYear
  })
  // set a varible called thisYearsTrips and iterate through usersTrip
  // check if the trip occured within this year
  // hint: will have to leverage new Date().getTime()
  // hard part: is a conditional between two dates (google!)

  let costOfAllTrips = 0;

  // will use thisYearsTrips instead of usersTrip here
  thisYearsTrips.forEach(trip => {
    const destID = trip.destinationID
    const duration = trip.duration
    
    destinations.forEach(location => {
      const costPerDay = location.estimatedLodgingCostPerDay
      const flightCost = location.estimatedFlightCostPerPerson
      if (destID === location.id) {
        const travelCost = costPerDay * duration
        const cost = travelCost + flightCost
        costOfAllTrips += cost
      }
    })
  })


  // now that we have the costOfAllTrips
  // costOfAllTrips should incur that 10% free on top
  // so costofAllTrips += //some math to calculate 10% of costOfAllTrips
console.log('hello', costOfAllTrips)

  return costOfAllTrips
}