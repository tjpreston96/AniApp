const router = require('express').Router();
const animeCtrl = require('../controllers/anime')

router.get('/new', isLoggedIn, animeCtrl.new)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
  module.exports = router