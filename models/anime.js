const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
      reviewer: String,
      reviewerPhoto: String, // dont understand this part...ask about it 
      rating: { type: Number, min: 1, max: 10 },
      content: String,
    },
    {
      timestamps: true,
    }
  );

  const animeSchema = new Schema({
    title: String,
    slug: String,
    id: Number,
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


  module.exports = mongoose.model("Anime", animeSchema);