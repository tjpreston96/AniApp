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

  },{
      timestamps: true
  });


  module.exports = mongoose.model("Anime", animeSchema);