// require('dotenv').config();
import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path: './env'
});

connectDB()


/*
const mongoose = require('mongoose');
const {DB_NAME} = require('../constance');
import express from 'express';
const app = express();
;(async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
        console.log("Connected to the database successfully");
        app.on("error", () => {
            console.error("Error connecting to the database");
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
})()

*/