const express = require("express")
const router = express.Router()

const { getAllRecipes, addrecipe, getLastFive, getById, updateRecipe } = require("../controllers/recipeController")
const { verifyToken, verifyAdmin } = require('../middlewares/auth')


router.get("/recipes", getAllRecipes)
router.post("/recipes", verifyToken, verifyAdmin, addrecipe) //añaden recetas los admin
router.get('/recent_recipes', getLastFive) //las últimas cinco añadidas
router.get("/recipes/:idRecipe", getById) // recetas por el id
router.patch("/recipes/:id", verifyToken, verifyAdmin, updateRecipe)
module.exports = router