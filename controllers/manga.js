const Manga = require('../models/manga');
const axios = require('axios')

module.exports = {
    new: newManga,
    Search,
    show,
    
}

function newManga(req, res) {
    res.render("manga/new", {
      title: "Manga Search",
      user: req.user,
      results: null
    })
}

function Search(req, res){
    axios.get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.query}`)
}