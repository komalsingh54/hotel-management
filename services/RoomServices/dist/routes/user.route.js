"use strict";
// src/routes/userRoutes.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_validation_1 = require("../validation/user.validation");
const router = express_1.default.Router();
router.post('/register', user_validation_1.validateRegister, user_controller_1.registerUserController);
router.post('/login', user_validation_1.validateLogin, user_controller_1.loginUserController);
router.get('/:id', user_validation_1.validateId);
exports.default = router;
