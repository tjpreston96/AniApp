const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readListSchema = new Schema(
  {
    title: String,
    slug: String

  },{
  timestamps: true
  })


const watchListSchema = new Schema(
  {
    title: String,
    slug: String

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
    readList: [readListSchema],
    watchList: [watchListSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
