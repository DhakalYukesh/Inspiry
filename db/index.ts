import mongoose from "mongoose";

export async function dbConnection() {
    try {
        const connectionString = process.env.MONGODB_CONNECTION_STRING || "";

        await mongoose.connect(connectionString)
    } catch (error) {
        console.log(error);
    }
}