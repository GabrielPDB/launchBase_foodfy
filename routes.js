const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

/* ROUTES WEBSITE */

routes.get('/', recipes.home)
routes.get('/about', recipes.about)
routes.get('/recipes', recipes.recipesPage)
routes.get("/recipes/:index", recipes.indexRecipe)

/* ROUTES ADMIN */

routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes