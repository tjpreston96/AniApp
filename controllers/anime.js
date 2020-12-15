const Anime = require('../models/anime');
const axios = require('axios')

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
      results: null
    })
  }
  
  
function search(req, res){
    axios.get(`https://kitsu.io/api/edge//anime?filter[text]=${req.body.query}`)
    .then((response)=> {
        console.log(response.data)
    })
}

function index(req,res){
    
}
function addToWatchList(req,res){
    
}
function removeFromWatchList(req,res){
    
}
function show(req,res){
    
}
