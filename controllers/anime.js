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

function addToWatchList(req, res) {
    req.user.watchList.push(req.body)
    req.user.save()
    .then(() => {
      res.redirect(`/anime/${req.body.slug}`)
    })
  }
  
function removeFromWatchList(req, res) {
    let idx = req.user.watchList.findIndex((a) => a.slug === req.params.slug)
    req.user.watchList.splice(idx, 1)
    req.user.save()
    .then(() => {
      res.redirect(`/anime/${req.body.slug}`)
    })
}

function show(req, res) {
    axios
      .get(`https://kitsu.io/api/edge//anime?filter[slug]=${req.params.slug}`)
      .then((response) => {

          console.log(response.data.data[0])
        Anime.findOne( {slug: response.data.data[0].slug} )
        .populate('favoritedBy')
        .then((anime) => {
            console.log(response.data.data[0], "banana pancakes")
          if(anime) {
            res.render("anime/show", {
                title: "Anime Details",
                user: req.user,
                anime: response.data.data[0],
                favoritedBy: anime.favoritedBy,
                reviews: anime.reviews,
              
            }); 
            
          } else {
            res.render("anime/show", {
                title: "Anime Details",
                user: req.user,
                anime: response.data.data[0],
                favoritedBy: [""],
                reviews: [""]
            }); 
          }
        })
      });
  }
