export const fetchTrips = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
    .then(response => response.json())
}

export const arrFetch = [
  fetchTrips('travelers'),
  fetchTrips('trips'),
  fetchTrips('destinations')
]