const Anime = require('../models/anime');
const axios = require('axios')

module.exports = {
    new: newAnime,
    new: newManga,
    aniSearch,
    show,
    
}

function newAnime(req, res) {
    res.render("anime/new", {
      title: "Anime Search",
      user: req.user,
      results: null
    })
  }
  
  function newManga(req, res) {
    res.render("anime/new", {
      title: "Manga Search",
      user: req.user,
      results: null
    })
  }
  
function search(req, res){
    axios.get(``)
}