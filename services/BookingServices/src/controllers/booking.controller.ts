
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

import { createRoomBooking, deleteRoomBookingById, getAllRoomBookings, getRoomBookingById, updateRoomBookingById } from '../services/BookingService';


// Create a new room booking
export const createRoomBookingController = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const roomBooking = await createRoomBooking(req.body);
        res.status(201).json(roomBooking);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get all room bookings
export const getAllRoomBookingsController = async (req: Request, res: Response) => {
    try {
        const roomBookings = await getAllRoomBookings();
        res.json(roomBookings);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get room booking by ID
export const getRoomBookingByIdController = async (req: Request, res: Response) => {
    try {
        const roomBooking = await getRoomBookingById(parseInt(req.params.id));
        res.json(roomBooking);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

// Update room booking by ID
export const updateRoomBookingByIdController = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const roomBooking = await updateRoomBookingById(parseInt(req.params.id), req.body);
        res.json(roomBooking);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

// Delete room booking by ID
export const deleteRoomBookingByIdController = async (req: Request, res: Response) => {
    try {
        await deleteRoomBookingById(parseInt(req.params.id));
        res.sendStatus(204);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
