// graphql/resolvers.js

const axios = require('axios');

const userServiceUrl = process.env.USER_SERVICE_URL;
const hotelServiceUrl = process.env.HOTEL_SERVICE_URL;
const roomServiceUrl = process.env.ROOM_SERVICE_URL;
const bookingServiceUrl = process.env.BOOKING_SERVICE_URL;

const resolvers = {
	Query: {
		getUserById: async (_, { id }) => {
			try {
				console.log(`${userServiceUrl}/api/users/${id}`)
				const response = await axios.get(`${userServiceUrl}/api/users/${id}`);
				return response.data;
			} catch (error) {
				console.error('Error fetching user:', error);
				throw new Error('Failed to fetch user');
			}
		},
		getHotelById: async (_, { id }) => {
			try {
				const response = await axios.get(`${hotelServiceUrl}/api/hotel/${id}`);
				return response.data;
			} catch (error) {
				console.error('Error fetching hotel:', error);
				throw new Error('Failed to fetch hotel');
			}
		},
		getRoomById: async (_, { id }) => {
			try {
				const response = await axios.get(`${roomServiceUrl}/api/rooms/${id}`);
				return response.data;
			} catch (error) {
				console.error('Error fetching room:', error);
				throw new Error('Failed to fetch room');
			}
		},
		getRoomBookingById: async (_, { id }) => {
			try {
				const response = await axios.get(`${bookingServiceUrl}/api/bookings/${id}`);
				return response.data;
			} catch (error) {
				console.error('Error fetching booking:', error);
				throw new Error('Failed to fetch booking');
			}
		},
		getAllRooms: async () => {
			try {
				const response = await axios.get(`${roomServiceUrl}/api/rooms`);
				return response.data;
			} catch (error) {
				console.error('Error fetching rooms:', error);
				throw new Error('Failed to fetch rooms');
			}
		},
		getAllRoomBookings: async () => {
			try {
				const response = await axios.get(`${bookingServiceUrl}/api/bookings`);
				return response.data;
			} catch (error) {
				console.error('Error fetching bookings:', error);
				throw new Error('Failed to fetch bookings');
			}
		},
	},
	Mutation: {
		createUser: async (_, { username, email, password, first_name, last_name, city, age }) => {
			try {
				const response = await axios.post(`${userServiceUrl}/api/users/register`, { username, email, password, first_name, last_name, city, age });
				console.log(response.data);
				return response.data;
			} catch (error) {
				console.error('Error creating user:', error);
				throw new Error('Failed to create user');
			}
		},
		createHotel: async (_, { name, location }) => {
			try {
				const response = await axios.post(`${hotelServiceUrl}/api/hotel`, { name, location });
				return response.data;
			} catch (error) {
				console.error('Error creating hotel:', error);
				throw new Error('Failed to create hotel');
			}
		},
		createRoom: async (_, { hotelId, number, type, price }) => {
			try {
				const response = await axios.post(`${roomServiceUrl}/api/rooms`, { hotelId, number, type, price });
				return response.data;
			} catch (error) {
				console.error('Error creating room:', error);
				throw new Error('Failed to create room');
			}
		},
		createRoomBooking: async (_, { roomId, userId, startDate, endDate }) => {
			try {
				const response = await axios.post(`${bookingServiceUrl}/api/bookings`, { roomId, userId, startDate, endDate });
				return response.data;
			} catch (error) {
				console.error('Error creating booking:', error);
				throw new Error('Failed to create booking');
			}
		},
	},
};

module.exports = resolvers;
