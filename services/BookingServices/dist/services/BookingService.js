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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomBookingById = exports.updateRoomBookingById = exports.getRoomBookingById = exports.getAllRoomBookings = exports.createRoomBooking = void 0;
const BookingModel_1 = __importDefault(require("../models/BookingModel"));
// Create a new room booking
const createRoomBooking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBooking = yield BookingModel_1.default.create(data);
        return roomBooking;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createRoomBooking = createRoomBooking;
// Get all room bookings
const getAllRoomBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBookings = yield BookingModel_1.default.findAll();
        return roomBookings;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getAllRoomBookings = getAllRoomBookings;
// Get room booking by ID
const getRoomBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBooking = yield BookingModel_1.default.findByPk(id);
        if (!roomBooking)
            throw new Error('Room booking not found');
        return roomBooking;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getRoomBookingById = getRoomBookingById;
// Update room booking by ID
const updateRoomBookingById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBooking = yield BookingModel_1.default.findByPk(id);
        if (!roomBooking)
            throw new Error('Room booking not found');
        yield roomBooking.update(data);
        return roomBooking;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.updateRoomBookingById = updateRoomBookingById;
// Delete room booking by ID
const deleteRoomBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomBooking = yield BookingModel_1.default.findByPk(id);
        if (!roomBooking)
            throw new Error('Room booking not found');
        yield roomBooking.destroy();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.deleteRoomBookingById = deleteRoomBookingById;
