const router = require('express').Router();
const mangaCtrl = require('../controllers/manga')

router.get('/new', isLoggedIn, mangaCtrl.new)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
  module.exports = router