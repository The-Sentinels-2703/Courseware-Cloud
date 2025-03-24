import express from 'express';
import bcryptjs from 'bcryptjs';
import { createUser, findUser } from '../controllers/userController.js';

const router = express.Router()

router.post('user/new', async (req, res) => {
    try {
        const salt = await bcryptjs.genSalt();
        const hashedPassword = await bcryptjs.hash(req.body.password);
        console.log('hashedPassword')
        const status = createUser(req.body.username, req.body.department, req.body.email, hashedPassword)
        if (status == 'user created') {
            res.statusCode(201).send('user Created');
        }
        else{
            res.statusCode(500).send("couldn't create user!!!")
        }
    } catch (error) {
        throw error;
    }
})

router.post('user/login', async (req, res) => {
    try {
       
    } catch (error) {
        
    }
})

export default router;
