export default {
  usersTrips: [
    {
      id:1,
      userID:44,
      destinationID:49,
      travelers:1,
      date:"2022/09/16",
      duration:8,
      status:"pending",
      suggestedActivities:[]
    },
    {
      id:1,
      userID:48,
      destinationID:49,
      travelers:1,
      date:"2022/09/16",
      duration:8,
      status:"approved",
      suggestedActivities:[]
    },
    {
      id:1,
      userID:13,
      destinationID:45,
      travelers:1,
      date:"2023/09/16",
      duration:8,
      status:"approved",
      suggestedActivities:[]
    },
  ],
  trips: [
    {
      id: 1,
      alt: "overview of city buildings with a clear sky",
      destination: "Lima, Peru",
      estimatedFlightCostPerPerson: 400,
      estimatedLodgingCostPerDay: 70,
      image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
    },
    {
      id: 2,
      alt: 'Stockholm, Sweden',
      destination: "Lima, Peru",
      estimatedFlightCostPerPerson: 780,
      estimatedLodgingCostPerDay: 100,
      image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    }
  ],
  allUser: [{
    id: 1,
    userID: 38,
    destination: {
      id: 49,
      destination: 'Miami, Florida',
      estimatedLodgingCostPerDay: 158,
      estimatedFlightCostPerPerson: 275,
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80',
      alt: 'sand with palm trees and tall buildings in the background'
    },
    travelerCount: 1,
    date: '2019/09/16',
    duration: 8,
    status: 'approved',
    activities: []
  }
  ],
  travelerData: [
    {
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer"
    },
    {
      id: 38,
      name: "Lazar Leamy",
      travelerType: "thrill-seeker"
    }
  ]
}