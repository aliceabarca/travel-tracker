// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/bikes.jpg'

import { arrFetch } from '../dist/api';

import { calculateTripsCost, filteredTrips } from './travelData';
import { cards, usersDestination } from '../dist/domUpdates';

// global

let currentTraveler = {
  id: 2,
  name: "Rachael Vaughten",
  travelerType: "thrill-seeker"
}

let currentTravelerTrips;
export let travelFeePrecentage = 0.10;

export const usersData = {
  user: null,
  travelers: [],
  trips: {
    all: [],
    past: [],
    pending: [],
    upcoming: [],
  },
  destinations: []
}


window.addEventListener('load', () => {
  Promise.all(arrFetch)
  .then(results => {
    const allUsersTrips = results[1].trips
    const tripsDestinations = results[2].destinations
    // usersData.travelers = results[0]
    usersData.trips = filteredTrips(currentTraveler.id, allUsersTrips)
    usersData.destinations = results[2]
    const __ = calculateTripsCost(usersData.trips.all, tripsDestinations)
    console.log(usersData)
    // currentTravelerTrips = usersTrip(currentTraveler.id, usersData.trips)
    // cards(currentTravelerTrips)
    // usersDestination(trips, destinations)
  })
})
console.log('This is the JavaScript entry file - your code begins here.');
