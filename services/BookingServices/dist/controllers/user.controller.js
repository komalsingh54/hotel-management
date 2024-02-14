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
exports.getUser = exports.loginUserController = exports.registerUserController = void 0;
const express_validator_1 = require("express-validator");
const UserService_1 = require("../services/UserService");
// Controller function for user registration
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Check for validation errors
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        // Return validation errors as response
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        // Call the service function to register the user
        const newUser = yield (0, UserService_1.registerUser)(req.body);
        // Send the newly created user object as the response
        res.json(newUser);
    }
    catch (error) {
        // Handle errors and send appropriate error response
        res.status(500).json({ error: error.message });
    }
});
exports.registerUserController = registerUserController;
// Controller function for user login
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        // Return validation errors as response
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        // Extract email and password from the request body
        const { username, password } = req.body;
        // Call the service function to authenticate the user
        const token = yield (0, UserService_1.loginUser)(username, password);
        // Send the authentication token as the response
        res.json({ token });
    }
    catch (error) {
        // Handle authentication errors and send appropriate error response
        res.status(401).json({ error: error.message });
    }
});
exports.loginUserController = loginUserController;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, UserService_1.getUserById)(parseInt(id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});
exports.getUser = getUser;
