const Manga = require('../models/manga');
const axios = require('axios')

module.exports = {
    new: newManga,
    search,
    show,
    index,
    addToReadList,
    removeFromReadList
}

function newManga(req, res) {
    res.render("manga/new", {
      title: "Manga Search",
      user: req.user,
      results: null
    })
}

function search(req, res){
    axios.get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.query}`)
    .then((response)=> {
        console.log(response.data)
    })
}
function index(req,res){
    Manga.find({ favoritedBy: req.user._id })
    .then((manga) => {
    res.render('manga/index', {
      title: "Manga Collection",
      user: req.user,
      manga
    })
  })    
}
function addToReadList(req,res){
    
}
function removeFromReadList(req,res){
    
}
function show(req,res){
    
}