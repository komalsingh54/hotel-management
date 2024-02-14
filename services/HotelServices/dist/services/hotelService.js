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
exports.deleteHotelById = exports.updateHotelById = exports.getHotelById = exports.getAllHotels = exports.createHotel = void 0;
const HotelModel_1 = __importDefault(require("../models/HotelModel"));
// Create a new hotel
const createHotel = (hotelData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield HotelModel_1.default.create(hotelData);
        return hotel;
    }
    catch (error) {
        throw new Error('Could not create hotel');
    }
});
exports.createHotel = createHotel;
// Retrieve all hotels
const getAllHotels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotels = yield HotelModel_1.default.findAll();
        return hotels;
    }
    catch (error) {
        throw new Error('Could not fetch hotels');
    }
});
exports.getAllHotels = getAllHotels;
// Retrieve hotel by ID
const getHotelById = (hotelId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield HotelModel_1.default.findByPk(hotelId);
        if (!hotel) {
            throw new Error('Hotel not found');
        }
        return hotel;
    }
    catch (error) {
        throw new Error('Could not fetch hotel');
    }
});
exports.getHotelById = getHotelById;
// Update hotel by ID
const updateHotelById = (hotelId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield HotelModel_1.default.findByPk(hotelId);
        if (!hotel) {
            throw new Error('Hotel not found');
        }
        yield hotel.update(updateData);
        return hotel;
    }
    catch (error) {
        throw new Error('Could not update hotel');
    }
});
exports.updateHotelById = updateHotelById;
// Delete hotel by ID
const deleteHotelById = (hotelId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hotel = yield HotelModel_1.default.findByPk(hotelId);
        if (!hotel) {
            throw new Error('Hotel not found');
        }
        yield hotel.destroy();
    }
    catch (error) {
        throw new Error('Could not delete hotel');
    }
});
exports.deleteHotelById = deleteHotelById;
