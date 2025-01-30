const express = require('express')
<<<<<<< HEAD
const { addToFavourites, getFavoriteRecipes } = require('../controllers/usersController.js')
=======
const { addToFavourites } = require('../controllers/usersController.js')
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69

const { verifyToken } = require('../middlewares/auth.js')
const router = express.Router()

<<<<<<< HEAD

router.get("/user/favorites", verifyToken, getFavoriteRecipes)
=======
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69
router.post("/user/:idRecipe/favorite", verifyToken, addToFavourites )

module.exports = router