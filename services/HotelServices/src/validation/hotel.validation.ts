import { Request, Response } from 'express';
import { body, check, validationResult } from 'express-validator';

export const validateLogin = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    (req: Request, res: Response, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

export const validateCreateHotel = [
    body('name').notEmpty().withMessage('Hotel Name is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('ratings').notEmpty().withMessage('ratings is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('country').notEmpty().withMessage('Country is required'),
    (req: Request, res: Response, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
]

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