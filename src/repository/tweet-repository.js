import Tweet from "../model/tweet.js";

class Tweetrepository {
  async create(data) {
    try {
      const response = await Tweet.create(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const data = await Tweet.findById(id).populate({
        path: "comment",
        // populate: {
        //   path: "content",
        // },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const result = await Tweet.findByIdAndUpdate(
        id,
        { userEmail: data },
        { new: true }
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const data = await Tweet.findOneAndDelete(id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(limit, offset) {
    const result = await Tweet.find().skip(offset).limit(limit);
    return result;
  }
}

export default Tweetrepository;
