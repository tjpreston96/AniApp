const router = require('express').Router();
const mangaCtrl = require('../controllers/manga')

router.get('/new', isLoggedIn, mangaCtrl.new)
router.get('/', isLoggedIn, mangaCtrl.index)
router.post('/search', isLoggedIn, mangaCtrl.search)
router.get('/:slug', isLoggedIn, mangaCtrl.show)
router.post('/:slug/collection', isLoggedIn, mangaCtrl.addToCollection)
router.delete('/:slug/collection', isLoggedIn, mangaCtrl.removeFromCollection)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
  module.exports = router