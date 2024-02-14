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
exports.getUserById = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const RoomModel_1 = __importDefault(require("../models/RoomModel"));
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, first_name, last_name, age, city } = userData;
    const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
    const newUser = yield RoomModel_1.default.create({
        username,
        email,
        password: hashedPassword,
        first_name,
        last_name,
        age,
        city
    });
    return newUser;
});
exports.registerUser = registerUser;
const loginUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RoomModel_1.default.findOne({ where: { username } });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
});
exports.loginUser = loginUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield RoomModel_1.default.findByPk(id);
    return user;
});
exports.getUserById = getUserById;
