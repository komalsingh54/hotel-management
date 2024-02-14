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
exports.deleteRoomById = exports.updateRoomById = exports.getRoomById = exports.getAllRooms = exports.createRoom = void 0;
// services/roomService.js
const RoomModel_1 = __importDefault(require("../models/RoomModel"));
const createRoom = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield RoomModel_1.default.create(data);
        return room;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createRoom = createRoom;
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield RoomModel_1.default.findAll();
        return rooms;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getAllRooms = getAllRooms;
// Get room by ID
const getRoomById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield RoomModel_1.default.findByPk(id);
        if (!room)
            throw new Error('Room not found');
        return room;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getRoomById = getRoomById;
// Update room by ID
const updateRoomById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield RoomModel_1.default.findByPk(id);
        if (!room)
            throw new Error('Room not found');
        yield room.update(data);
        return room;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.updateRoomById = updateRoomById;
// Delete room by ID
const deleteRoomById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield RoomModel_1.default.findByPk(id);
        if (!room)
            throw new Error('Room not found');
        yield room.destroy();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.deleteRoomById = deleteRoomById;
