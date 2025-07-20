// require('dotenv').config();
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express';
const app = express();
dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((error) =>{
    console.error("Database connection failed:", error);
})

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