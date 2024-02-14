"use strict";
// controllers/roomController.js
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
exports.deleteRoomByIdController = exports.updateRoomByIdController = exports.getRoomByIdController = exports.getAllRoomsController = exports.createRoomController = void 0;
const express_validator_1 = require("express-validator");
const RoomService_1 = require("../services/RoomService");
// Create a new room
const createRoomController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const room = yield (0, RoomService_1.createRoom)(req.body);
        res.status(201).json(room);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createRoomController = createRoomController;
// Get all rooms
const getAllRoomsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, RoomService_1.getAllRooms)();
        res.json(rooms);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllRoomsController = getAllRoomsController;
// Get room by ID
const getRoomByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const room = yield (0, RoomService_1.getRoomById)(req.params.id);
        res.json(room);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getRoomByIdController = getRoomByIdController;
// Update room by ID
const updateRoomByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const room = yield (0, RoomService_1.updateRoomById)(parseInt(req.params.id), req.body);
        res.json(room);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.updateRoomByIdController = updateRoomByIdController;
// Delete room by ID
const deleteRoomByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        yield (0, RoomService_1.deleteRoomById)(parseInt(req.params.id));
        res.sendStatus(204);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.deleteRoomByIdController = deleteRoomByIdController;
