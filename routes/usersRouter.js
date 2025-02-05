const express = require('express')
const { addToFavourites, getFavoriteRecipes, removeFromFavoritesRecipes } = require('../controllers/usersController.js')

const { verifyToken } = require('../middlewares/auth.js')
const router = express.Router()


router.get("/user/favorites", verifyToken, getFavoriteRecipes) //comprueba token y muestra recetas
router.post("/user/:idRecipe/favorite", verifyToken, addToFavourites ) //comprueba token y añade a fav receta
router.delete("/user/:idRecipe/favorite", verifyToken, removeFromFavoritesRecipes) //comprueba token y elimina de fav receta

module.exports = router