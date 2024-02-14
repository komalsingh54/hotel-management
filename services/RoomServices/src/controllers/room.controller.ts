// controllers/roomController.js

import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

import { createRoom, deleteRoomById, getAllRooms, getRoomById, updateRoomById } from '../services/RoomService';


// Create a new room
export const createRoomController = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const room = await createRoom(req.body);
        res.status(201).json(room);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get all rooms
export const getAllRoomsController = async (req: Request, res: Response) => {
    try {
        const rooms = await getAllRooms();
        res.json(rooms);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get room by ID
export const getRoomByIdController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const room = await getRoomById(req.params.id);
        res.json(room);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

// Update room by ID
export const updateRoomByIdController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const room = await updateRoomById(parseInt(req.params.id), req.body);
        res.json(room);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

// Delete room by ID
export const deleteRoomByIdController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        await deleteRoomById(parseInt(req.params.id));
        res.sendStatus(204);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
