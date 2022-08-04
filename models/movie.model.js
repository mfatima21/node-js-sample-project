
const mongoose= require('mongoose');

const movies = mongoose.Schema(
  {
    title: {
      type: String ,
      required:true
    },
    cast: {
        type : [String] ,
        required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Movie", movies);