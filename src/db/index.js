import mongoose from 'mongoose';
import { DB_NAME } from '../constance.js';

const connectDB =  async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to the database successfully HOST: ${connectionInstance.connection.host}`);
        // return connectionInstance;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}

export default connectDB;