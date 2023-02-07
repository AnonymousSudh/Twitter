import { LikeRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
    }

    async toogleLike(modelType, modelId, userId) {
        
        const likable = this.likeRepository.findByUserIdModelType({

        });

        if (likable){
            await this.likeRepository.destroy(likable.id);
        }else if{
            // await this.LikeRepository.create({

            })
        }
    }
}



export default LikeService;