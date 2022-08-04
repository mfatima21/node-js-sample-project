
const mongoose= require('mongoose');

const movies = mongoose.Schema(
  {
    titles: {
      type: String
    },
    cast: {
        type : [mongoose.Types.ObjectId],
        ref: "cast",
        required: true,
        autopopulate: { maxDepth: 1 }      },
    },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movies);
module.exports = mongoose.model("posts", movies);