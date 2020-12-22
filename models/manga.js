const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
      reviewer: String,
      reviewerPhoto: String,
      rating: { type: Number, min: 1, max: 10 },
      content: String,
    },
    {
      timestamps: true,
    }
  );

  const mangaSchema = new Schema({
    title: String,
    slug: String,
    status: String,
    averageRating: String,
    startDate: String,
    endDate: String,
    description: String,
    imageUrl: String,
    videoUrl: String,
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reviews: [reviewSchema],
  },{
      timestamps: true
  });


  module.exports = mongoose.model("Manga", mangaSchema);