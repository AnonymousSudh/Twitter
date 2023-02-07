import mongoose from "mongoose"

const hashtag = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique:true
    },
    tweets: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet"
    }]
}, { timestamps: true });

// hashtag.pre("save",function(next){
//     // console.log(this);
//     this.title = this.title.toLowerCase();
//     // console.log(this);
//     next()
// })



const Hashtag = mongoose.model("Hashtag",hashtag)
export default Hashtag;

