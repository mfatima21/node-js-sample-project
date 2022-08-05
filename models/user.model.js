const mongoose= require('mongoose');

const user =  mongoose.Schema({
    first_name: {
     type: String
    },
    last_name: {
     type: String
    },
    user_name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    role: {
        type: String
    }
    },
    {
        timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model("User", user);