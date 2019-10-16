//creating the route to register the user

//adding a user to our model and this will create a token for the application.

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult, body } from "express-validator";
import User from "../models/User";
import Notification from '../models/Notification';

const router = express.Router();

router.post(
    "/register", [
        check("name", "Name is required")
        .not()
        .isEmpty(),
        check(
            "password",
            "Please enter a password with 6 or more characters"
        ).isLength({ min: 6 }),
        check("email", "Invalid Email")
        .normalizeEmail()
        .isEmail(),
        body("passwordConfirmation").custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Password confirmation does not match password");
            }
            return true;
        }),
        body("email").custom(async(value, { req }) => {
            let user = await User.findOne({ value }); //goes to the user model to check whether email already exists
            if (user) {
                throw new Error("Email already exists");
            }
            return true;
        })
    ],

    async(req, res) => {
        const result = validationResult(req);
        console.log(req.body);
        if (result.errors.length) {
            console.log("Enters error block 400 here");

            return res.status(400).json({ errors: result.errors });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email }); //goes to the user model to check whether email already exists

            user = new User({
                name,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                    name: user.name
                }
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.status(201).json({ token, payload });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: "Server error" });
        }
    }
);

//@route   POST api/auth
//@desc    Authenticate user and get token
//@access   Public
router.post(
    "/login", [
        check("email", "Please include valid email")
        .normalizeEmail()
        .isEmail(),
        check("password", "Password is required").exists()
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            //see if user exists
            let user = await User.findOne({ email });
            if (!user) {
                console.log("Invalid Email");
                return res
                    .status(400)
                    .json({ errors: [{ msg: "invalid credentials" }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                console.log("Invalid Pasword");
                return res
                    .status(400)
                    .json({ errors: [{ msg: "invalid credentials" }] });
            }
            // getting notification from the database
            let notifications = await Notification.find({ user: user.id });

            //get user info for payload from mongo
            const payload = {
                user: {
                    id: user.id,
                    name: user.name,
                }
            };

            const body = {
                user: {
                    id: user.id,
                    name: user.name,
                },
                notifications
            }

            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    console.log(token);
                    res.status(200).json({ token, body });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;