const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    return res.render('home', { recipes })
})

server.get('/about', function (req, res) {
    return res.render('about', { page: 'about' })
})

server.get('/recipes', function (req, res) {
    return res.render('recipes', { recipes, page: 'recipes' })
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', { recipe: recipes[recipeIndex], page: 'recipes'} )
})

server.listen(3100, function () {
    console.log('server is running')
})