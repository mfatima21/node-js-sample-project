import mongoose from 'mongoose'

const cast = new Schema({
    first_name: {
      type: String
    },
    last_name: {
        type: String
    },
    user_name: {
        type: String
    },
    },
    {
        timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
        }
    }
);

const Cast = mongoose.model("Cast", cast);
export default Cast;