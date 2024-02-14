import RoomBooking from '../models/BookingModel';

// Create a new room booking
export const createRoomBooking = async (data: any) => {
	try {
		const roomBooking = await RoomBooking.create(data);
		return roomBooking;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Get all room bookings
export const getAllRoomBookings = async () => {
	try {
		const roomBookings = await RoomBooking.findAll();
		return roomBookings;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Get room booking by ID
export const getRoomBookingById = async (id: number) => {
	try {
		const roomBooking = await RoomBooking.findByPk(id);
		if (!roomBooking) throw new Error('Room booking not found');
		return roomBooking;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Update room booking by ID
export const updateRoomBookingById = async (id: number, data: any) => {
	try {
		const roomBooking = await RoomBooking.findByPk(id);
		if (!roomBooking) throw new Error('Room booking not found');
		await roomBooking.update(data);
		return roomBooking;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Delete room booking by ID
export const deleteRoomBookingById = async (id: any) => {
	try {
		const roomBooking = await RoomBooking.findByPk(id);
		if (!roomBooking) throw new Error('Room booking not found');
		await roomBooking.destroy();
	} catch (error: any) {
		throw new Error(error.message);
	}
};
