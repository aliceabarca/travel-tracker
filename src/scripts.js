
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/bikes.jpg';

import { arrFetch, setApiData } from '../dist/api';

import { calculateTripsCost, filteredTrips } from './travelData';
import {
  displayCards,
  displayCost,
  displayPastTrips,
  displayPendingTrips,
  displayTripCards,
  displayUsersName,
  estimatedCostForNewTrip,
  usersDestination,
} from '../dist/domUpdates';

// query selector
// export const estimatedCostButton = document.getElementById('est-cost');
export const upcomingTripsButton = document.getElementById('upcoming');
export const pendingTripsButton = document.getElementById('pending');
export const pastTripsButton = document.getElementById('past');
export const totalSpentThisYear = document.getElementById('spent-this-year');
export const cardContainer = document.querySelector('.card-container');
export const destDrop = document.querySelector('#destination-drop');
export const errorMessage = document.querySelector('.error-message');
export const travelersSum = document.querySelector('.number-of-travelers');
export const durationOfTrip = document.querySelector('.trips-duration');
export const estimatedCost = document.querySelector('.estimate-cost');
export const startDate = document.querySelector('.start-date');
export const submitButton = document.querySelector('.sub-button');

export const bookingTrip = document.querySelector('.booking-trip')
export const bookTripButton = document.querySelector('.book-trip')
// add event listeners

submitButton.addEventListener('click', () => {
  apiFetchCall()
});



// upcomingTripsButton.addEventListener('click', () => {
//   pastTripsButton.classList.add('active')
//   upcomingTripsButton.classList.remove('active')
//   displayCost(tripsCost);
//   displayCards()
// });
pendingTripsButton.addEventListener('click', () => {
  displayTripCards(usersData.trips.pending, usersData.destinations);
});
pastTripsButton.addEventListener('click', () => {
  displayTripCards(usersData.trips.past, usersData.destinations);
});

destDrop.addEventListener('change', () => {
  estimatedCost.innerText = `Estimated Cost: ${estimatedCostForNewTrip(
    parseInt(durationOfTrip.value),
    parseInt(travelersSum.value),
    usersData.destinations.find(destination => {
      return destination.destination === destDrop.value;
    }),
  )}`;
});

travelersSum.addEventListener('change', () => {
  estimatedCost.innerText = `Estimated Cost: ${estimatedCostForNewTrip(
    parseInt(durationOfTrip.value),
    parseInt(travelersSum.value),
    usersData.destinations.find(destination => {
      return destination.destination === destDrop.value;
    }),
  )}`;
});

durationOfTrip.addEventListener('change', () => {
  console.log('hello', durationOfTrip.value, parseInt(travelersSum.value),  usersData.destinations.find(destination => {
    return destination.destination === destDrop.value;
  }))
  estimatedCost.innerText = `Estimated Cost: ${estimatedCostForNewTrip(
    parseInt(durationOfTrip.value),
    parseInt(travelersSum.value),
    usersData.destinations.find(destination => {
     return destination.destination === destDrop.value;
    }),
  )}`;
});

// global

let currentTraveler;

let currentTravelerTrips;

export let travelFeePercentage = 1.1;

export const usersData = {
  user: {
    id: 2,
    name: 'Rachael Vaughten',
    travelerType: 'thrill-seeker',
  },
  travelers: [],
  trips: {
    all: [],
    past: [],
    pending: [],
    upcoming: [],
  },
  destinations: [],
};

window.addEventListener('load', () => {
  renderFetch();
});

function renderFetch() {
  Promise.all(arrFetch).then(results => {
    const allUsersTrips = results[1].trips;
    const tripsDestinations = results[2].destinations;
    usersData.destinations = tripsDestinations;
    // usersData.travelers = results[0]
    usersData.trips = filteredTrips(usersData.user.id, allUsersTrips);
    const tripsCost = calculateTripsCost(
      usersData.trips.all,
      tripsDestinations,
    );
    displayUsersName(usersData.user);
    setDestinationDropDown(usersData.destinations);
  });
}

export function setDestinationDropDown(dest) {
  return dest.map(location => {
    return (destDrop.innerHTML += `
   <option value="${location.destination}">${location.destination}</option>
   `);
  });
}

export function apiFetchCall() {
  const local = usersData.destinations.find(dest => {
    return destDrop.value === dest.destination
   })
 
   setApiData(
     Date.now(),
     usersData.user.id,
     local.id,
     parseInt(travelersSum.value),
     (startDate.value).replaceAll('-', '/'),
     parseInt(durationOfTrip.value),
     'pending',
     [],
     )
     .then(response => console.log(response))
     .then(renderFetch());
}

console.log('This is the JavaScript entry file - your code begins here.');
