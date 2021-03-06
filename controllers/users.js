const User = require("../models/user");
const Anime = require("../models/anime");
const Manga = require("../models/manga");

module.exports = {
  index,
  showProfile,
  update,
  show,
  addFriend,
  removeFriend,
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User Index", user: req.user, users });
  });
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .populate("friends")
    .then((user) => {
      res.render("users/profile", { title: "Profile Page", user });
    });
}

function update(req, res) {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true }).then(() => {
    res.redirect("/users/profile");
  });
}

function show(req, res) {
  User.findById(req.params.id).then((userInfo) => {
    Anime.find({ favoritedBy: userInfo._id }).then((anime) => {
      res.render("users/show", {
        title: "User Details",
        userInfo,
        user: req.user,
        anime,
      });
    });
  });
}

// probably going to need show2 for manga

function addFriend(req, res) {
  req.user.friends.push(req.params.id);
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`);
  });
}

function removeFriend(req, res) {
  let idx = req.user.friends.indexOf(req.params.id);
  req.user.friends.splice(idx, 1);
  req.user.save().then(() => {
    res.redirect(`/users/${req.params.id}`);
  });
}
