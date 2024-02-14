// services/roomService.js
import Room from "../models/RoomModel";

export const createRoom = async (data: any) => {
	try {
		const room = await Room.create(data);
		return room;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const getAllRooms = async () => {
	try {
		const rooms = await Room.findAll();
		return rooms;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Get room by ID
export const getRoomById = async (id: any) => {
	try {
		const room = await Room.findByPk(id);
		if (!room) throw new Error('Room not found');
		return room;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Update room by ID
export const updateRoomById = async (id: number, data: any) => {
	try {
		const room = await Room.findByPk(id);
		if (!room) throw new Error('Room not found');
		await room.update(data);
		return room;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

// Delete room by ID
export const deleteRoomById = async (id: any) => {
	try {
		const room = await Room.findByPk(id);
		if (!room) throw new Error('Room not found');
		await room.destroy();
	} catch (error: any) {
		throw new Error(error.message);
	}
};
