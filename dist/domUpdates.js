import {
  totalSpentThisYear,
  usersData,
  currentTravelerTrips,
  cardContainer,
  travelFeePercentage,
} from '../src/scripts';
import { filteredTrips, calculateTripsCost } from '../src/travelData';
import { setApiData } from './api';

export function displayTripCards(trips, destinations) {
  cardContainer.innerHTML = '';

  trips.forEach(trip => {
    const destination = destinations.filter(dest => {
      return trip.destinationID === dest.id;
    });
    return (cardContainer.innerHTML += `<section class="box-container">${destination[0].destination}
  <img class="trip-image" src="${destination[0].image}">
  <section class="date-trips">${trip.date}</section>
  </section>`);
  });
}

export function displayUsersName(traveler) {
  const greeting = document.querySelector('.greeting');
  const usersFirstName = usersData.user.name.split(' ')[0];
  greeting.innerText = `Welcome, ${usersFirstName}!`;
}

export function estimatedCostForNewTrip(duration, travelers, destination) {
  if (duration && travelers && destination) {
    console.log(duration, travelers, destination)
    return `$${(
  ((destination.estimatedLodgingCostPerDay * duration) +
      (destination.estimatedFlightCostPerPerson * travelers)) * travelFeePercentage
    ).toFixed(2)}`;
  } else {
    return `PLEASE FILL EVERYTHING OUT`;
  }
}

export function displayCost(tripsCost) {
  totalSpentThisYear.innerHTML = `${tripsCost}`;
}

export function displayNewTrip( destination, travelers, date, duration) {
  // Date.now(),
  // usersData.user.id,
  // local.id,
  // parseInt(travelersSum.value),
  // (startDate.value).replaceAll('-', '/'),
  // parseInt(durationOfTrip.value),
  // 'pending',
  // [],
}