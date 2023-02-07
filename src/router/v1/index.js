import  express  from "express";
const app = express();
const router = express.Router();

import createTweet from "../../controller/tweet-controller.js"

router.post('/createtweet',createTweet)

export default router





