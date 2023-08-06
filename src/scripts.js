// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/bikes.jpg';

import { arrFetch } from '../dist/api';

import { calculateTripsCost, filteredTrips } from './travelData';
import { displayCards, displayCost, displayPastTrips, displayPendingTrips, displayTripCards, displayUsersName, estimatedCostForNewTrip, usersDestination } from '../dist/domUpdates';

// query selector
// export const estimatedCostButton = document.getElementById('est-cost');
export const upcomingTripsButton = document.getElementById('upcoming');
export const pendingTripsButton = document.getElementById('pending');
export const pastTripsButton = document.getElementById('past');
export const totalSpentThisYear = document.getElementById('spent-this-year');
export const cardContainer = document.querySelector('.card-container')
export const deskDrop = document.querySelector('#destination-drop')
export const errorMessage = document.querySelector('.error-message')
export const travelers = document.querySelector('.number-of-travelers')
export const durationOfTrip = document.querySelector('.trips-duration')
export const chooseDestination = document.querySelector('#destination-drop')
const estimatedCost = document.querySelector('.estimate-cost')
// add event listeners

// upcomingTripsButton.addEventListener('click', () => {
//   pastTripsButton.classList.add('active')
//   upcomingTripsButton.classList.remove('active')
//   displayCost(tripsCost);
//   displayCards()
// });
pendingTripsButton.addEventListener('click', () => {
  displayTripCards(usersData.trips.pending, usersData.destinations)
  // console.log('destination', usersData.destinations)
});
pastTripsButton.addEventListener('click', () => {
  displayTripCards(usersData.trips.past, usersData.destinations)
});

deskDrop.addEventListener('change', () => {
  estimatedCost.innerHTML = `${estimatedCostForNewTrip(durationOfTrip.value, Number(travelers.value), usersData.destinations.find(destination => {
    return destination.destinations === chooseDestination.value
  }))}`
  
})


travelers.addEventListener('change', () => {
  estimatedCost.innerHTML = `${estimatedCostForNewTrip(durationOfTrip.value, Number(travelers.value), usersData.destinations.find(destination => {
    return destination.destinations === chooseDestination.value
  }))}`
  
})


durationOfTrip.addEventListener('change', () => {
  estimatedCost.innerHTML = `${estimatedCostForNewTrip(durationOfTrip.value, Number(travelers.value), usersData.destinations.find(destination => {
    return destination.destinations === chooseDestination.value
  }))}`
  
})



// global

let currentTraveler = {
  id: 30,
  name: 'Rachael Vaughten',
  travelerType: 'thrill-seeker',
};

let currentTravelerTrips;
export let travelFeePrecentage = 1.1;

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
  Promise.all(arrFetch).then(results => {
    const allUsersTrips = results[1].trips;
    const tripsDestinations = results[2].destinations;
    usersData.destinations = tripsDestinations
    // usersData.travelers = results[0]
    usersData.trips = filteredTrips(currentTraveler.id, allUsersTrips);
    // console.log('turing', usersData.trips)
    // usersData.destinations = results[2];
    // currentTravelerTrips = usersData.trips.all;
    const tripsCost = calculateTripsCost(usersData.trips.all, tripsDestinations);
    // console.log(usersData);
    // displayCost(tripsCost)
    // displayCards()
    // currentTravelerTrips = usersTrip(currentTraveler.id, usersData.trips)
    // displayTripCards(usersData.trips.all, tripsDestinations)
    // console.log('dest', tripsDestinations)
    displayUsersName(usersData.user)
    setDestinationDropDown(usersData.destinations)
    // usersDestination(trips, destinations)
  });
});

export function setDestinationDropDown(dest) {
  return dest.map(location => {
   return deskDrop.innerHTML +=  `
   <option value="${location.destination}">${location.destination}</option>
   `
  })
 }


console.log('This is the JavaScript entry file - your code begins here.');
