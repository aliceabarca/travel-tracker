import { usersData } from "../src/scripts";
import { filteredTrips, calculateTripsCost } from "../src/travelData";


export function cards(trips, destination) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';
  let tripCards = '';
    trips.forEach(trip => {
  cardContainer.innerHTML += `<div class="box-container">
  <div class="image">
  <img class="trip-image" src="${trip.destinations.image}"
  <section class="trips-destination">${usersData.destinations}</section>
  <section class="date-trips">${currentTravelTrips}</section>
  </div>`
    })
}

export function formatDate(date) {
  let fullDate = new Date(date).toDateString();
  return fullDate;
}

export function usersDestination(trips, destinations) {
  const allInfo = trips.map(trip => {
    let findDestination = destinations.find(destination => destination.id === trip.destination)
    return {
      name: findDestination.destination,
      image: findDestination.image,
      travelers: trip.travelers
    }
  })
  console.log('mad', allInfo)
  return allInfo
} 