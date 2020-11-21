const recipes = require('../data')

/* WEBSITE */

exports.home = function (req, res) {
    return res.render('website/home', { recipes })
}

exports.about = function (req, res) {
    return res.render('website/about', { page: 'about' })
}

exports.recipesPage = function (req, res) {
    return res.render('website/recipes', { recipes, page: 'recipes' })
}

exports.indexRecipe = function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('website/recipe', { recipe: recipes[recipeIndex], page: 'recipes'} )
}

/* ADMIN */

exports.index = function (req, res) {
    return res.render("admin/index")
}

exports.create = function (req, res) {
    return res.render("admin/create")
}

exports.post = function (req, res) {
    return true
}

exports.show = function (req, res) {
    return res.render("admin/show")
}

exports.edit = function (req, res) {
    return res.render("admin/edit")
}

exports.put = function (req, res) {
    return true
}

exports.delete = function (req, res) {
    return true
}