"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomBookingByIdController = exports.updateRoomBookingByIdController = exports.getRoomBookingByIdController = exports.getAllRoomBookingsController = exports.createRoomBookingController = void 0;
const express_validator_1 = require("express-validator");
const BookingService_1 = require("../services/BookingService");
// Create a new room booking
const createRoomBookingController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const roomBooking = yield (0, BookingService_1.createRoomBooking)(req.body);
        res.status(201).json(roomBooking);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createRoomBookingController = createRoomBookingController;
// Get all room bookings
const getAllRoomBookingsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBookings = yield (0, BookingService_1.getAllRoomBookings)();
        res.json(roomBookings);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllRoomBookingsController = getAllRoomBookingsController;
// Get room booking by ID
const getRoomBookingByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBooking = yield (0, BookingService_1.getRoomBookingById)(parseInt(req.params.id));
        res.json(roomBooking);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getRoomBookingByIdController = getRoomBookingByIdController;
// Update room booking by ID
const updateRoomBookingByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const roomBooking = yield (0, BookingService_1.updateRoomBookingById)(parseInt(req.params.id), req.body);
        res.json(roomBooking);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.updateRoomBookingByIdController = updateRoomBookingByIdController;
// Delete room booking by ID
const deleteRoomBookingByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, BookingService_1.deleteRoomBookingById)(parseInt(req.params.id));
        res.sendStatus(204);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.deleteRoomBookingByIdController = deleteRoomBookingByIdController;
