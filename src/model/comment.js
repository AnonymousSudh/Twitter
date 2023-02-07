import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        min:[15,"Not more than 15 words"],
        // minLength:[15,"Not more than 15 words"],
        required:true
    },
    email:{
        type:String
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ]
})

const Comment = new mongoose.model("Comment",commentSchema)

export default Comment;