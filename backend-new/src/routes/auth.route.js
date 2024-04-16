import { Router } from 'express';
import { createUser, login, getUser } from '../controllers/auth.controller.js';
import {body, validationResult} from 'express-validator';
import fetchuser from '../middleware/fetchuser.js';

const router = Router();

router.post("/login", [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],login);

router.post("/create-user" , [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 3 }),
], createUser)

router.post("/get-user", fetchuser, getUser)

export default router;
