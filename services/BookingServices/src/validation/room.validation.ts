import { Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export const bookingValidationRules =
    [
        body('hotel_id').notEmpty().withMessage('hotel_id is required'),
        body('room_id').notEmpty().withMessage('room_id is required'),
        body('user_id').notEmpty().withMessage('user_id is required'),
        body('start_date').notEmpty().withMessage('start_date is required'),
        body('end_date').notEmpty().withMessage('end_date is required'),
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