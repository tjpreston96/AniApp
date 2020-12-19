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
      results: []
    })
}

function search(req, res){
    axios.get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.query}`)
    .then((response)=> {
        res.render("manga/new",{
            title: "Manga Search",
            user: req.user,
            results: response.data.data
        })
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
function show(req, res) {
  axios
    .get(`https://kitsu.io/api/edge//manga?filter[slug]=${req.params.slug}`)
    .then((response) => {
      Manga.findOne( {slug: response.data.data[0].slug} )
      .populate('favoritedBy')
      .then((manga) => {
        if(manga) {
          res.render("manga/show", {
              title: "Manga Details",
              user: req.user,
              manga: response.data.data[0],
              favoritedBy: manga.favoritedBy,
              reviews: manga.reviews,
          }); 
          
        } else {
          res.render("manga/show", {
              title: "Manga Details",
              user: req.user,
              manga: response.data.data[0],
              favoritedBy: [""],
              reviews: [""]
          }); 
        }
      })
    });
}