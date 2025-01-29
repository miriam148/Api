const express = require("express")
const router = express.Router()

const { getAllRecipes, addrecipe, getLastFive, getById } = require("../controllers/recipeController")



router.get("/recipes", getAllRecipes)
router.post("/recipes", addrecipe)
router.get('/recent_recipes', getLastFive)
router.get("/recipes/:idRecipe", getById)
module.exports = router