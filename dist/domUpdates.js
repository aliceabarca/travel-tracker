import {
  totalSpentThisYear,
  usersData,
  currentTravelerTrips,
  cardContainer,
  travelFeePercentage,
  errorMessage,
  usersPassword,
  usersUsername,
  allTravelers,
} from '../src/scripts';


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
    return `$${(
      (destination.estimatedLodgingCostPerDay * duration +
        destination.estimatedFlightCostPerPerson * travelers) *
      travelFeePercentage
    ).toFixed(2)}`;
  } else {
    return `PLEASE FILL EVERYTHING OUT`;
  }
}

export function displayCost(tripsCost) {
  totalSpentThisYear.innerHTML = `${tripsCost}`;
}

export function switchDisplay() {
  const loginPage = document.querySelector('.login-page');
  const travelPage = document.querySelector('.travel');
  loginPage.classList.toggle('hidden');
  travelPage.classList.toggle('hidden');
}
export function loginUser() {
  let travelId;
  if (usersUsername.value.length > 8 && usersUsername.value.includes('traveler')) {
    const num = usersUsername.value.replace('traveler', '');
    travelId = parseInt(num);
  } else {
    errorMessage.classList.remove('hidden');
  }

  const checkTraveler = usersData.travelers.find(traveler => {
    return traveler.id === travelId;
  });
  console.log('password', usersPassword.value)
  console.log('traveler', checkTraveler)

  if (usersPassword.value !== 'travel' || checkTraveler === undefined) {
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.classList.add('hidden');
    switchDisplay();
    clearInputs();
    usersData.user = checkTraveler;
  }
}

export function clearInputs() {
  usersUsername.input = '';
  usersPassword.input = '';
}
