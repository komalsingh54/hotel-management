"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.roomValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.roomValidationRules = [
    (0, express_validator_1.body)('hotelId').notEmpty().withMessage('hotelId is required'),
    (0, express_validator_1.body)('roomNumber').notEmpty().withMessage('room number is required'),
    (0, express_validator_1.body)('type').notEmpty().withMessage('type is required'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('price is required'),
    (0, express_validator_1.body)('capacity').notEmpty().withMessage('capacity is required'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
exports.validateId = [
    (0, express_validator_1.check)('id').isInt(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
