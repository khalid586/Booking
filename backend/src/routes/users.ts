import express, { Request, Response } from 'express';
import User from '../models/user.model';

const router = express.Router();

router.post('/register', async (req: Request, res: Response)=> {

    try {
        // Check if user already exists
        let user = await User.findOne({ 
            email: req.body.email 
        });

        if (user) {
            res.status(400).json({ message: "User already exists!" });
            return
        }

        // Create a new user
        user = new User(req.body);
        await user.save();

        // Return a success response
        res.status(201).json({ message: "User registered successfully!", user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

export default router;
