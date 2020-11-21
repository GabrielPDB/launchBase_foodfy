const express = require('express')
const routes = express.Router()
const recipes = require("./data")

/* ROUTES WEBSITE */

routes.get('/', function (req, res) {
    return res.render('home', { recipes })
})

routes.get('/about', function (req, res) {
    return res.render('about', { page: 'about' })
})

routes.get('/recipes', function (req, res) {
    return res.render('recipes', { recipes, page: 'recipes' })
})

routes.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', { recipe: recipes[recipeIndex], page: 'recipes'} )
})

/* ROUTES ADMIN */

/* routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete) */

module.exports = routes