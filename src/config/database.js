import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const connect=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Twitter').then(() => {
        console.log("connected to mongo db");
    }).catch(() =>
        console.log("Error while connection to Mongo Db")
    )
}

export default connect;
