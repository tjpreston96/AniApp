const Manga = require('../models/manga');
const axios = require('axios')

module.exports = {
    new: newManga,
    Search,
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

function Search(req, res){
    axios.get(`https://kitsu.io/api/edge//manga?filter[text]=${req.body.query}`)
    .then((response)=> {
        console.log(response.data)
    })
}
function index(req,res){
    
}
function addToReadList(req,res){
    
}
function removeFromReadList(req,res){
    
}