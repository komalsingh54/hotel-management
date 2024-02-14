"use strict";
// src/routes/userRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_validation_1 = require("../validation/room.validation");
const room_controller_1 = require("../controllers/room.controller");
const router = express_1.default.Router();
router.post('/', room_validation_1.roomValidationRules, room_controller_1.createRoomController);
router.get('/', room_controller_1.getAllRoomsController);
router.get('/:id', room_validation_1.validateId, room_controller_1.getRoomByIdController);
router.put('/:id', room_validation_1.validateId, room_controller_1.updateRoomByIdController);
router.delete('/:id', room_validation_1.validateId, room_controller_1.deleteRoomByIdController);
exports.default = router;
