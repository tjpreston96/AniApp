const router = require("express").Router();

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index Page",
    user: req.user ? req.user : null,
  });
});

router.get("/home", function (req, res) {
  res.render("home", { title: "Home Page", user: req.user ? req.user : null });
});

module.exports = router;
