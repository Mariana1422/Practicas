import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect ("mongodb+srv://root:1234@cluster0.lyyjmey.mongodb.net/");
        console.log(">> DB Connect");
    } catch (error){
        console.log(error);
    }
}