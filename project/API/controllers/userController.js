import { Router } from "express";
import userService from "../services/userService.js";
import User from "../models/User.js";
import authService from "../services/authService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";

const userController = Router();

userController.get('/api/users', async (req, res) => {
    const users = await userService.getAll().lean();
    res.json(users);
});

userController.get('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    }
    catch(err) {
        throw new Error(err);
    }
});
userController.post('/api/register', async (req, res) => {
    const {username, email, password, rePassword} = req.body;
    try {
        const token = await authService.register(username, email, password, rePassword);
        res.cookie(AUTH_COOKIE_NAME, token, {httpOnly: true});
    } catch (err) {
        console.error(err);
    }
});
userController.post('api/login', async (req, res) => {
    const {username, password} = req.body;
    try{
        const token = await authService.login(username, password);

        res.status(200).json(AUTH_COOKIE_NAME, token, {httpOnly: true});
        
    }catch(err){
        console.error(err);
    }
})
userController.post("api/users/:id/edit", (req, res) => {

})

export default userController;