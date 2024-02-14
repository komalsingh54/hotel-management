
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { createHotel, getAllHotels, getHotelById, updateHotelById, deleteHotelById } from '../services/hotelService';

export const createHotelController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newHotel = await createHotel(req.body);
        res.status(201).json(newHotel);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllHotelController = async (req: Request, res: Response) => {
    try {
        const hotels = await getAllHotels();
        res.status(201).json(hotels);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getHotelByIdController = async (req: Request, res: Response) => {
    const { id } = req?.params;
    try {
        const hotel = await getHotelById(parseInt(id));
        if (!hotel) {
            return res.status(404).json({ error: "Hotel not found" });
        }
        res.status(200).json(hotel);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateHotelByIdController = async (req: Request, res: Response) => {
    try {
        const hotel = await updateHotelById(parseInt(req.params.id), req.body);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel Not Found' })
        }
        res.status(200).json(req.body)

    } catch (err: any) {
        res.status(err.statusCode ? err.statusCode : 500).json(err.data ? err.data : err.message)
    }
}

export const deleteHotelByIdController = async (req: Request, res: Response) => {
    try {
        const hotel = await deleteHotelById(parseInt(req.params.id));
        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong while deleting the hotel.' });
    }
}