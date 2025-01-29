const express = require('express')
const { addToFavourites } = require('../controllers/usersController.js')

const { verifyToken } = require('../middlewares/auth.js')
const router = express.Router()

router.post("/user/:idRecipe/favorite", verifyToken, addToFavourites )

module.exports = router