import LikeModel from "../model/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
    constructor() {
        super(LikeModel) // here we call super constructor(CrudRepository)
    }

    async findByUserIdModelType(data) {
        try {
            const result = await LikeModel.find(data)
            return result;
        } catch (error) {
            console.log(error);
            return error
        }

    }
}

export default LikeRepository
