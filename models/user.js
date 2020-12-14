const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeListSchema = new Schema(
  {

  },{
  timestamps: true
  })


const mangaListSchema = new Schema(
  {

  },{
  timestamps: true
  })


const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    genreChoices: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}],
    mangaList: [mangaListSchema],
    animeList: [animeListSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
