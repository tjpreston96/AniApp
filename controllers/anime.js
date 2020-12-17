const Anime = require('../models/anime');
const axios = require('axios');
const user = require('../models/user');

module.exports = {
    new: newAnime,
    search,
    show,
    index,
    addToWatchList,
    removeFromWatchList
}

function newAnime(req, res) {
    res.render("anime/new", {
      title: "Anime Search",
      user: req.user,
      results: []
    })
  }
  
  
  function search(req, res){
      axios.get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.query}`)
      .then((response)=> {
        console.log(response.data.data)
        res.render("anime/new",{
            title: "Anime Search",
            user: req.user,
            results: response.data.data
        })
    })
}





function index(req,res){
    Anime.find({ favoritedBy: req.user._id })
    .then((anime) => {
        res.render('anime/index', {
            title: "Anime Collection",
            user: req.user,
            anime
        })
    })    
}
function addToWatchList(req,res){
    
}
function removeFromWatchList(req,res){
    
}
function show(req,res){
    
}
