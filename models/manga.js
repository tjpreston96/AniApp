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

  },{
      timestamps: true
  });


  module.exports = mongoose.model("Manga", mangaSchema);