import Hashtag from "../model/hashtag.js";

class HashtagRepository {
    async create(data) {
        try {
            const response = await Hashtag.create(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            console.log(data);
            const result = await Hashtag.insertMany(data);
            return result;

        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const data = await Hashtag.findById(id).populate({
                path: "comment",
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const result = await Hashtag.findByIdAndUpdate(
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
            const data = await Hashtag.findOneAndDelete(id);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(limit, offset) {
        const result = await Hashtag.find().skip(offset).limit(limit);
        return result;
    }

    async findByTagName(data) {
        try {
            const result = await Hashtag.find({
                title: data
            });
            // console.log(result);
            return result;

        } catch (err) {
            console.log(err)
        }
    }



}

export default HashtagRepository;
