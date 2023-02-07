import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Hashtag","Tweet"]
    },
    likable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,  
        refPath:'onModel'
    },
    user:{
        type:String,
        required:true
    }
})

const Like = new mongoose.model("Like",likeSchema);
export default LikeModel