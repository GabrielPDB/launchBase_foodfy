const fs = require('fs')
const data = require('../data.json')
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

    return res.render('website/recipe', { recipe: recipes[recipeIndex], page: 'recipes' })
}

/* ADMIN */

exports.index = function (req, res) {
    return res.render("admin/index")
}

exports.create = function (req, res) {
    return res.render("admin/create")
}

exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    // Validação
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('Please, fill all fields!')
        }
    }

    let { ingredients, preparation } = req.body

    if (ingredients[ingredients.lenght - 1] == '') ingredients.pop()
    if (preparation[preparation.lenght - 1] == '') preparation.pop()

    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]

    if (lastRecipe) {
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        ...req.body,
        ingredients,
        preparation
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write File Error!')

        return res.redirect(`/admin/recipes/${id}`)
    })


}

exports.show = function (req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render("admin/show", { recipe: foundRecipe })
}

exports.edit = function (req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    return res.render("admin/edit", { recipe: foundRecipe })
}

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write Error!")

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function (recipe) {
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/admin/recipes')
    })
}