// import Tweetrepository from "../repository/Tweet-repository.js";
// import HashtagRepository from "../repository/hashtag-repository.js";
import {HashtagRepository,Tweetrepository} from "../repository/index.js"

class tweetService {
    constructor() {
        this.tweetRepo = new Tweetrepository();
        this.hashtagRepo = new HashtagRepository();
    }
    async create(data) {
        console.log(data);
        const tweet = await this.tweetRepo.create(data)
        const content = data.content;
        var allTag = content.match(/#[a-zA-Z0-9_]+/g).map((val) => val.substring(1).toLowerCase());
        console.log(allTag);
        var alreadypresentTagInDatabase = await this.hashtagRepo.findByTagName(allTag);
        // console.log(alreadypresentTagInDatabase);
        alreadypresentTagInDatabase.forEach((val)=>{
            val.tweets.push(tweet.id)
            val.save();
        })

        var alreadypresentTag = alreadypresentTagInDatabase.map((val) => val.title) 
        // console.log(alreadypresentTag);
        // const newTag =  
        var newTagArray = []
         var newTag = allTag.filter((val) => {
            if (!alreadypresentTag.includes(val)) {
                newTagArray.push({title:val,tweet:tweet._id})
            }
        })
        console.log(newTagArray);
       
        const createBulkTag = await this.hashtagRepo.bulkCreate(newTagArray);
        console.log(createBulkTag);
        createBulkTag.forEach((val)=>{
            val.tweets.push(tweet.id);
            val.save()
        })
        console.log(createBulkTag);


    }
}


export default tweetService