
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { registerUser, loginUser, getUserById } from '../services/UserService';

// Controller function for user registration
export const registerUserController = async (req: Request, res: Response) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return validation errors as response
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        // Call the service function to register the user
        const newUser = await registerUser(req.body);
        res.json(newUser);
    } catch (error: any) {
        // Handle errors and send appropriate error response
        res.status(500).json({ error: error.message });
    }
};

// Controller function for user login
export const loginUserController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return validation errors as response
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        // Extract email and password from the request body
        const { username, password } = req.body;
        // Call the service function to authenticate the user
        const token = await loginUser(username, password);
        // Send the authentication token as the response
        res.json({ token });
    } catch (error: any) {
        // Handle authentication errors and send appropriate error response
        res.status(401).json({ error: error.message });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = await getUserById(parseInt(id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
}

