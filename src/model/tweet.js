import mongoose, { Schema } from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hashtag"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like"
        }
    ],

    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

}, { timestamps: true })


const Tweet = new mongoose.model("Tweet", tweetSchema);
export default Tweet
