// src/routes/userRoutes.js

import express from 'express';
import { loginUserController, registerUserController } from '../controllers/user.controller';
import { validateId, validateLogin, validateRegister } from '../validation/user.validation';

const router = express.Router();

router.post('/register', validateRegister, registerUserController);
router.post('/login', validateLogin, loginUserController);
router.get('/:id', validateId)

export default router;
