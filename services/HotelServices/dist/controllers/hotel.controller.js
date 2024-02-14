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
exports.deleteHotelByIdController = exports.updateHotelByIdController = exports.getHotelByIdController = exports.getAllHotelController = exports.createHotelController = void 0;
const express_validator_1 = require("express-validator");
const hotelService_1 = require("../services/hotelService");
const createHotelController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newHotel = yield (0, hotelService_1.createHotel)(req.body);
        res.status(201).json(newHotel);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createHotelController = createHotelController;
const getAllHotelController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotels = yield (0, hotelService_1.getAllHotels)();
        res.status(201).json(hotels);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllHotelController = getAllHotelController;
const getHotelByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    try {
        const hotel = yield (0, hotelService_1.getHotelById)(parseInt(id));
        if (!hotel) {
            return res.status(404).json({ error: "Hotel not found" });
        }
        res.status(200).json(hotel);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getHotelByIdController = getHotelByIdController;
const updateHotelByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield (0, hotelService_1.updateHotelById)(parseInt(req.params.id), req.body);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel Not Found' });
        }
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(err.statusCode ? err.statusCode : 500).json(err.data ? err.data : err.message);
    }
});
exports.updateHotelByIdController = updateHotelByIdController;
const deleteHotelByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield (0, hotelService_1.deleteHotelById)(parseInt(req.params.id));
        res.status(201).json(hotel);
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong while deleting the hotel.' });
    }
});
exports.deleteHotelByIdController = deleteHotelByIdController;
