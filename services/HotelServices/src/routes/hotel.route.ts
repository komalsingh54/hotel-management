// src/routes/userRoutes.js

import express from 'express';
import { createHotelController, deleteHotelByIdController, getAllHotelController, getHotelByIdController, updateHotelByIdController } from '../controllers/hotel.controller';
import { validateCreateHotel, validateId } from '../validation/hotel.validation';

const router = express.Router();

router.post('/', validateCreateHotel, createHotelController);
router.get('/', getAllHotelController);
router.get('/:id', validateId, getHotelByIdController);
router.put('/:id', validateId, updateHotelByIdController);
router.delete('/:id', validateId, deleteHotelByIdController);

export default router;
