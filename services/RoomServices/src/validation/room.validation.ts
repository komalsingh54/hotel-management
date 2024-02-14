import { Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export const roomValidationRules =
    [
        body('hotelId').notEmpty().withMessage('hotelId is required'),
        body('roomNumber').notEmpty().withMessage('room number is required'),
        body('type').notEmpty().withMessage('type is required'),
        body('price').notEmpty().withMessage('price is required'),
        body('capacity').notEmpty().withMessage('capacity is required'),
        (req: Request, res: Response, next: any) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];


export const validateId = [
    check('id').isInt(),
    (req: Request, res: Response, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];