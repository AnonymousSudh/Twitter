import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:String
})

export default mongoose.model("User",userSchema);