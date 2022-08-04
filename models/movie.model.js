
const mongoose= require('mongoose');

const movies = mongoose.Schema(
  {
    title: {
      type: String ,
      required:true
    },
    cast: {
        type : String ,
      required: true 
        },
    },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movies);
module.exports = mongoose.model("Posts", movies);