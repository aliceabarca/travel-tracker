import chai  from 'chai';
const expect = chai.expect
import sampleData  from '../test/sampleData'

import {calculateTripsCost, filteredTrips} from '../src/travelData';


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
    const incorrectMessage = filteredTrips(1)

    expect(incorrectMessage).to.equal('Incorrect')
  });
})

describe('calculate trips', () => {
  it('should be a function', () => {
    expect(typeof calculateTripsCost).to.equal('function')
  })

  
})