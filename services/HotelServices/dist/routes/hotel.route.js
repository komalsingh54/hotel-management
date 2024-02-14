"use strict";
// src/routes/userRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hotel_controller_1 = require("../controllers/hotel.controller");
const hotel_validation_1 = require("../validation/hotel.validation");
const router = express_1.default.Router();
router.post('/', hotel_validation_1.validateCreateHotel, hotel_controller_1.createHotelController);
router.get('/', hotel_controller_1.getAllHotelController);
router.get('/:id', hotel_validation_1.validateId, hotel_controller_1.getHotelByIdController);
router.put('/:id', hotel_validation_1.validateId, hotel_controller_1.updateHotelByIdController);
router.delete('/:id', hotel_validation_1.validateId, hotel_controller_1.deleteHotelByIdController);
exports.default = router;
