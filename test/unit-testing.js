import { expect } from 'chai';
import { filteredTrips } from '../src/travelData';

describe('trips', () => {
  let trips;

  beforeEach('init data', () => {
    trips = filteredTrips(2, 'pending')
  })
  it('should return pending trips', () => {
    expect(trips.status).to.equal('filter')
  })
})