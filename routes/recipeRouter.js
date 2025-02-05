const express = require("express")
const router = express.Router()

const { getAllRecipes, addrecipe, getLastFive, getById, updateRecipe, deleteRecipes } = require("../controllers/recipeController")
const { verifyToken, verifyAdmin } = require('../middlewares/auth')


router.get("/recipes", getAllRecipes) //muestran todas las recetas falta meterle likes
router.post("/recipes", verifyToken, verifyAdmin, addrecipe) //añaden recetas los admin
router.get('/recent_recipes', getLastFive) //las últimas cinco añadidas
router.get("/recipes/:idRecipe", getById) // recetas por el id
router.patch("/recipes/:id", verifyToken, verifyAdmin, updateRecipe) //actualiza receta solo admin
router.delete("/recipes/:id", verifyToken, verifyAdmin, deleteRecipes)//borra receta solo admin
module.exports = router