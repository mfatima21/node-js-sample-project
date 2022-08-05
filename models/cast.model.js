const mongoose= require('mongoose');

const cast =  mongoose.Schema({
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

module.exports = mongoose.model("Cast", cast);