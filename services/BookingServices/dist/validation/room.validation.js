"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.bookingValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.bookingValidationRules = [
    (0, express_validator_1.body)('hotel_id').notEmpty().withMessage('hotel_id is required'),
    (0, express_validator_1.body)('room_id').notEmpty().withMessage('room_id is required'),
    (0, express_validator_1.body)('user_id').notEmpty().withMessage('user_id is required'),
    (0, express_validator_1.body)('start_date').notEmpty().withMessage('start_date is required'),
    (0, express_validator_1.body)('end_date').notEmpty().withMessage('end_date is required'),
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
