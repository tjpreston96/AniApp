const router = require("express").Router();
const animeCtrl = require("../controllers/anime");

router.get("/new", isLoggedIn, animeCtrl.new);
router.get("/", isLoggedIn, animeCtrl.index);
router.post("/search", isLoggedIn, animeCtrl.search);
router.get("/:slug", isLoggedIn, animeCtrl.show);
router.post("/:slug/collection", isLoggedIn, animeCtrl.addToCollection);
router.delete("/:slug/collection", isLoggedIn, animeCtrl.removeFromCollection);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
