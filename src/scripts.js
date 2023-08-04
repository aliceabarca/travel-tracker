// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/bikes.jpg'

import { arrFetch } from '../dist/api';


export const usersData = {
  user: null,
  trips: [],
  destination: [],
  travelers: []
}


window.addEventListener('load', () => {
  Promise.all(arrFetch)
  .then(results => {
    usersData.travelers = results[0]
    usersData.trips = results[1]
    usersData.destination = results[2]
    console.log(results)
  })
})
console.log('This is the JavaScript entry file - your code begins here.');
