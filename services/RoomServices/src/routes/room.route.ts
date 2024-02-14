// src/routes/userRoutes.js

import express from 'express';
import { roomValidationRules, validateId } from '../validation/room.validation';
import { createRoomController, deleteRoomByIdController, getAllRoomsController, getRoomByIdController, updateRoomByIdController } from '../controllers/room.controller';

const router = express.Router();

router.post('/', roomValidationRules, createRoomController);
router.get('/', getAllRoomsController);
router.get('/:id', validateId, getRoomByIdController);
router.put('/:id', validateId, updateRoomByIdController);
router.delete('/:id', validateId, deleteRoomByIdController)

export default router;
