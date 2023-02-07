
class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            console.log(data);
            const result = await this.model.insertMany(data);
            return result;

        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const data = await this.model.findById(id).populate({
                path: "comment",
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(
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
            const data = await this.model.findOneAndDelete(id);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(limit, offset) {
        const result = await this.model.find().skip(offset).limit(limit);
        return result;
    }

}

export default CrudRepository;