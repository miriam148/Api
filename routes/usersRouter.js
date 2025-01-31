const express = require('express')
const { addToFavourites, getFavoriteRecipes } = require('../controllers/usersController.js')

const { verifyToken } = require('../middlewares/auth.js')
const router = express.Router()


router.get("/user/favorites", verifyToken, getFavoriteRecipes)
router.post("/user/:idRecipe/favorite", verifyToken, addToFavourites )

module.exports = router