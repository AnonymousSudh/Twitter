import express from "express";
const app = express();
import * as dotenv from "dotenv";
import bodyparse from "body-parser"
import connect from "./config/database.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT;

import tweetService from "./services/tweet-service.js";
import route from "./router/index.js"
import LikeRepository from "./repository/like-repository.js";
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
app.use("/apiroute",route)

const tweetservice = new tweetService();
const likeRepository = new LikeRepository();

app.listen(3000, async () => {
  console.log(`Listning to Port no ${PORT}`);
  await connect();



  const data = likeRepository.create({
    onModel:"Hashtag",
    likable:"63de79b24814f8ea6b069fda",
  })
  console.log(data);
  // const data = await tweetservice.findByName(tagArray);
  // const newTweet={content:"this is #THIRD df", email:"sudhnahu@gmail.com"}
  // const data = await tweetservice.create(newTweet)


  // const tag = [{title:"beautiful"}, {title:"hot"}]
  // const data = await Hashtag.find({
  //   content: tag
  // }
  // );
  // console.log(data);

  // if (data.length == 0) {
  //   const result = await Hashtag.insertMany(tag);
  //   console.log(result)

  // }



  //   const updateTweet = await Tweetrepository.update(
  //     "63da58aaca6cbfa7de35a1d5",
  //     "suchitamaurya@gmail.com"
  //   );
  //   console.log(updateTweet);


  // //  getting all value in one query
  // const data = await Tweetrepository.getAll(4, 2);
  // console.log(data);



  // //    getting one data
  //   const Tweets = await Tweetrepository.get("63da587790cdf77a9a8d1b2b");
  //   console.log(Tweets);

  //   // creating a Tweet and comment
  //   const tweets = await Tweetrepository.create({
  //     content: "15 tweet",
  //     userEmail: "mauryasudhanshu",
  //   });
  //   //   console.log(tweets);
  //   const comments = await Comment.create({
  //     content: "15 comment",
  //   });

  //   tweets.comment.push(comments);
  //   await tweets.save();
  //   // console.log("final");
  //   console.log(tweets);
});
