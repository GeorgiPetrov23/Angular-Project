import express from 'express';
import mongoose from 'mongoose';
import boatController from './controllers/boatController.js';
import userController from './controllers/userController.js'
import boatService from './services/boatService.js';
import User from "./models/User.js";
import Boat from './models/Boat.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authController from './controllers/authController.js';

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));        
app.use(cookieParser());
app.use(boatController);
app.use(userController);
app.use(authController);


const url = 'mongodb://localhost:27017';
mongoose.connect(url, {dbName: 'Boat_blog'})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB failed: " + err));



app.get('/api', (req, res) => {
    res.send("Welcome to mongoDB server");
})
// app.get('/boats', async (req, res) => {
//     try {
//         const boats = await Boat.find();
//         res.json(boats);
//     } catch (err) {
//         console.error(err);
//     }
// });




app.listen(3000, () => console.log(`Server is running on http://localhost:${port}`))