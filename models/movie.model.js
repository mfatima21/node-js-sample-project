import mongoose from 'mongoose'

const movies = new Schema(
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
export default Movie;