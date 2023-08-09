import chai  from 'chai';
const expect = chai.expect
import sampleData  from '../test/sampleData'

import {calculateTripsCost, filteredTrips} from '../src/travelData';

import travelerData from './travel-data';
import destinationData from './destination-data';
import tripData from './trip-data';

// let dataModel = sampleData
// console.log('hello',dataModel[1])

describe('trips', () => {
  it('should be a function', () => {
    expect(typeof filteredTrips).to.equal('function')
  })

  it('should return user pending', () => {
    const pendingTrip = filteredTrips(44, sampleData.usersTrips)

    expect(pendingTrip.pending).to.deep.equal([ {id:1,
      userID:44,
      destinationID:49,
      travelers:1,
      date:"2022/09/16",
      duration:8,
      status:"pending",
      suggestedActivities:[]}])
  });

  it('should return user approved', () => {
    const approvedTrip = filteredTrips(48, sampleData.usersTrips)

    expect(approvedTrip.past).to.deep.equal([{id:1,
      userID:48,
      destinationID:49,
      travelers:1,
      date:"2022/09/16",
      duration:8,
      status:"approved",
      suggestedActivities:[]
    }])
  })

  it('should return users upcoming trips', () => {
    const upcomingTrips = filteredTrips(13, sampleData.usersTrips)

    expect(upcomingTrips.upcoming).to.deep.equal([    {
      id:1,
      userID:13,
      destinationID:45,
      travelers:1,
      date:"2023/09/16",
      duration:8,
      status:"approved",
      suggestedActivities:[]
    }])
  })

  it('should return incorrect if users trips does not exist', () => {
    const incorrectMessage = filteredTrips(52)

    expect(incorrectMessage).to.equal('No user found')
  });
})

describe('calculate trips', () => {

let sampleTrips1
let sampleTrips2

let sampleCurrentDestination
const travelNum = destinationData[0]
const flightCost = travelNum.estimatedFlightCostPerPerson
const lodgingCost = travelNum.estimatedLodgingCostPerDay



  sampleCurrentDestination = {
    id: 49,
    destination: 'Miami, Florida',
    estimatedLodgingCostPerDay: 158,
    estimatedFlightCostPerPerson: 275,
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80',
    alt: 'sand with palm trees and tall buildings in the background'
  }

  sampleTrips1 = {
    travelers: 2,
    duration: 8,
  }

  sampleTrips2 = {
    travelers: 0,
    duration: 7,
  }

  it('should be a function', () => {
    expect(typeof calculateTripsCost).to.equal('function')
  })
  
  it('should calculate flight cost per person', () => {
    expect(flightCost).to.equal(830)
  })
  
  it('should calculate lodging cost per day', () => {
    expect(lodgingCost).to.equal(70)
  })

  it('should return a number', () => {
    const cost = calculateTripsCost(tripData, destinationData, 2021)
    expect(cost).to.equal('0.00')
  })

  it('should return error if data incorrect', () => {
    const errorMessage = calculateTripsCost(tripData)
    expect(errorMessage).to.equal('Missing Information')
  })
})
