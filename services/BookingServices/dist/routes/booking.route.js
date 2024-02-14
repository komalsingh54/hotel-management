"use strict";
// src/routes/userRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_validation_1 = require("../validation/room.validation");
const booking_controller_1 = require("../controllers/booking.controller");
const router = express_1.default.Router();
router.post('/', room_validation_1.bookingValidationRules, booking_controller_1.createRoomBookingController);
router.get('/', booking_controller_1.getAllRoomBookingsController);
router.get('/:id', room_validation_1.validateId, booking_controller_1.getRoomBookingByIdController);
router.put('/:id', room_validation_1.validateId, booking_controller_1.updateRoomBookingByIdController);
router.delete('/:id', room_validation_1.validateId, booking_controller_1.deleteRoomBookingByIdController);
exports.default = router;
