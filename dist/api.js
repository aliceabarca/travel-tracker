export const fetchTrips = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`).then(response =>
    response.json(),
  );
};

export const arrFetch = [
  fetchTrips('travelers'),
  fetchTrips('trips'),
  fetchTrips('destinations'),
];

export const setApiData =(trips) => {
  return fetch(`http://localhost:3001/api/v1/trips`), {
    method: 'POST',
    body: JSON.stringify({
    id: id,
    userID: userID,
    destinationID: destinationID,
    travelers: travelers,
    date: 'YYYY/MM/DD',
    duration: duration,
    status: 'approved' || 'pending',
    suggestedActivies: suggestedActivies
  }),
},
  {
    "Content-Type": "application/json"
    }
}

export const fetchDestination = (id, estimatedLodgingCost, estimatedFlightCost, image, alt) => {
  return fetch(`http://localhost:3001/api/v1/destinations`), {
    method: 'POST',
    body: JSON.stringify({
      id,
      estimatedLodgingCost,
      estimatedFlightCost,
      image,
      alt,
    })
  }
}