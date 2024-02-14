import Hotel from '../models/HotelModel';

// Create a new hotel
export const createHotel = async (hotelData: any) => {
	try {
		const hotel = await Hotel.create(hotelData);
		return hotel;
	} catch (error) {
		throw new Error('Could not create hotel');
	}
};

// Retrieve all hotels
export const getAllHotels = async () => {
	try {
		const hotels = await Hotel.findAll();
		return hotels;
	} catch (error) {
		throw new Error('Could not fetch hotels');
	}
};

// Retrieve hotel by ID
export const getHotelById = async (hotelId: number) => {
	try {
		const hotel = await Hotel.findByPk(hotelId);
		if (!hotel) {
			throw new Error('Hotel not found');
		}
		return hotel;
	} catch (error) {
		throw new Error('Could not fetch hotel');
	}
};

// Update hotel by ID
export const updateHotelById = async (hotelId: number, updateData: any) => {
	try {
		const hotel = await Hotel.findByPk(hotelId);
		if (!hotel) {
			throw new Error('Hotel not found');
		}
		await hotel.update(updateData);
		return hotel;
	} catch (error) {
		throw new Error('Could not update hotel');
	}
};

// Delete hotel by ID
export const deleteHotelById = async (hotelId: number) => {
	try {
		const hotel = await Hotel.findByPk(hotelId);
		if (!hotel) {
			throw new Error('Hotel not found');
		}
		await hotel.destroy();
	} catch (error) {
		throw new Error('Could not delete hotel');
	}
};