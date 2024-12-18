import { Router } from 'express';
import authService from '../services/authService.js';
import { AUTH_COOKIE_NAME } from '../constants.js';

const authController = Router();

authController.post('api/register', async (req, res) => {
    const {username, email, password, rePassword} = req.body;

    try {
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
    } catch (err) {
        throw new Error(err);
    }
});
authController.post('api/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const token = await authService.login(username, password);

        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
    }catch(err){
        throw new Error(err);
    }
});
authController.get('/logout', (req, res) =>{
    res.clearCookie(AUTH_COOKIE_NAME);
});

export default authController;