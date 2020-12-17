const router = require('express').Router();
const mangaCtrl = require('../controllers/manga')

router.get('/new', isLoggedIn, mangaCtrl.new)
router.get('/', isLoggedIn, mangaCtrl.index)
router.post('/search', isLoggedIn, mangaCtrl.search)
router.get('/:slug', isLoggedIn, mangaCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
  module.exports = router