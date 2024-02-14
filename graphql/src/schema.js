// graphql/schema.js

const { gql } = require('apollo-server-express');

// Define GraphQL type definitions
const typeDefs = gql`
  type User {
    user_id: ID!
    username: String!
    email: String!
    password: String!
    first_name: String!
    last_name: String!
    city: String!
    age: String!
  }

  type Hotel {
    hotel_id: ID!
    name: String!
    address: String!
    description: String!
    ratings: String!
    images: String!
    city: String!
    country: String!
    rooms: [Room!]!
  }

  type Room {
    room_id: ID!
    hotel_id: ID!
    room_number: Int!
    type: String!
    price: Float!
    capacity: Int!
  }

  type RoomBooking {
    booking_id: ID!
    room_id: ID!
    user_id: ID!
    start_date: String!
    end_date: String!
  }

  type Query {
    getUserById(id: ID!): User
    getHotelById(id: ID!): Hotel
    getAllHotel(): Hotel
    getRoomById(id: ID!): Room
    getAllRooms(): Room
    getRoomBookingById(id: ID!): RoomBooking
    getAllRooms: [Room!]!
    getAllRoomBookings: [RoomBooking!]!
    getBookingById(id: ID!): RoomBooking 
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, first_name: String!, last_name: String!, city: String!, age: String!): User
    createHotel(name: String!, location: String!): Hotel
    createRoom(hotelId: ID!, number: Int!, type: String!, price: Float!): Room
    createRoomBooking(roomId: ID!, userId: ID!, startDate: String!, endDate: String!): RoomBooking
    updateRoomBooking(id: ID!, startDate: String!, endDate: String!): RoomBooking
    deleteRoomBooking(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
