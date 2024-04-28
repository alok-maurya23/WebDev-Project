import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://alokmaurya2626:Alokmaurya26@cluster0.h5bqf3v.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


