const Anime = require('../models/anime');
const axios = require('axios')

module.exports = {
    new: newAnime,
    new: newManga,
    Search,
    show,
    
}

function newAnime(req, res) {
    res.render("anime/new", {
      title: "Anime Search",
      user: req.user,
      results: null
    })
  }
  
  
function Search(req, res){
    axios.get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.query}`)
}
