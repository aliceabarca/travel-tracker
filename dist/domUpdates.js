import {
  totalSpentThisYear,
  usersData,
  currentTravelerTrips,
  cardContainer,
} from '../src/scripts';
import { filteredTrips, calculateTripsCost } from '../src/travelData';

export function displayTripCards(trips, destinations) {
  cardContainer.innerHTML = ''

  trips.forEach(trip => {
    const destination = destinations.filter(dest => {
      return trip.destinationID === dest.id;
    });
    console.log('turing', destination)
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

export function displayCards() {
  const trips = usersData.trips.all;

  const destination = usersData.destinations;

  const { pastTrips, upcomingTrips } = filteredTrips(trips, destination);
  cardContainer.innerHTML = '';

  showTrips.forEach(trip => {
    const card = displayTripCards(trip);
    cardContainer.appendChild(card);
  });
}

export function displayCost(tripsCost) {
  totalSpentThisYear.innerHTML = `${tripsCost}`;
}
