const recipes = require('../data')

/* WEBSITE */

exports.home = function (req, res) {
    return res.render('home', { recipes })
}

exports.about = function (req, res) {
    return res.render('about', { page: 'about' })
}

exports.recipesPage = function (req, res) {
    return res.render('recipes', { recipes, page: 'recipes' })
}

exports.indexRecipe = function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', { recipe: recipes[recipeIndex], page: 'recipes'} )
}

/* ADMIN */

exports.index = function (req, res) {
    return true
}

exports.create = function (req, res) {
    return true
}

exports.post = function (req, res) {
    return true
}

exports.show = function (req, res) {
    return true
}

exports.edit = function (req, res) {
    return true
}

exports.put = function (req, res) {
    return true
}

exports.delete = function (req, res) {
    return true
}