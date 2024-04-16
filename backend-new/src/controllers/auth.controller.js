// signup, login, getuser

import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';


const createUser = async (req, res) => {
    let success = false;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // Check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const AuthToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, AuthToken })
        // res.json(user)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
}

const login = async (req, res) => {
    let success = false;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const AuthToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, AuthToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

export {
    createUser, login, getUser
}
