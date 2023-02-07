import TweetService from "../services/tweet-service.js"

const tweetService = new TweetService();

const createTweet =async(req,res)=>{
    try {
        // console.log(req.body);
        const response = await tweetService.create(req.body);
        console.log(response);
        return res.status(201).json({
            success:true,
            msg: "Succesfully created a new tweet",
            data:response,
            error:""
        })
    } catch (error) {
        console.log("Error at controller layer");
        return res.status(500).json({
            success:false,
            msg: "Something went wrong",
            data:"",
            error
        })
        
    }

}
export default createTweet