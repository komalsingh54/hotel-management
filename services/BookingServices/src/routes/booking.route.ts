// src/routes/userRoutes.js

import express from 'express';
import { bookingValidationRules, validateId } from '../validation/room.validation';
import { createRoomBookingController, deleteRoomBookingByIdController, getAllRoomBookingsController, getRoomBookingByIdController, updateRoomBookingByIdController } from '../controllers/booking.controller';

const router = express.Router();

router.post('/', bookingValidationRules, createRoomBookingController);
router.get('/', getAllRoomBookingsController);
router.get('/:id', validateId, getRoomBookingByIdController);
router.put('/:id', validateId, updateRoomBookingByIdController);
router.delete('/:id', validateId, deleteRoomBookingByIdController)

export default router;
