const express = require("express")
const router = express.Router()

const { getAllRecipes, addrecipe } = require("../controllers/recipeController")



router.get("/recipe", getAllRecipes)
router.post("/recipe", addrecipe)

module.exports = router