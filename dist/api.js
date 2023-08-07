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

export const setApiData = (id, userID, destinationID, travelers, date, duration, status, suggestedActivities) => {

const postApi = {
id: id,
userID: userID,
destinationID: destinationID,
travelers: travelers,
date: date,
duration: duration,
status: status,
suggestedActivities: suggestedActivities
}

  return fetch(`http://localhost:3001/api/v1/trips`, {
    method: 'POST',
    body: JSON.stringify(
      postApi
  ),
  headers: {
     "Content-Type": "application/json"
     }
})
}

// export const postVacationRequest = (vacation, userID,tripID) => {
//   let data = {
//       id: 204, 
//       userID: 1, 
//       destinationID: 1, 
//       travelers: 1, 
//       date: '2023/09/07', 
//       duration: 1, 
//       status: 'pending', 
//       suggestedActivities: [],
//   }
//   return fetch(`http://localhost:3001/api/v1/trips`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .catch((error) => {
//       alert(error);
//     });
  
// }