const recipeModel = require('../models/recipeModel')

const getAllRecipes =  async (req,res) => {
    try {
      
        const recipes =   await recipeModel.find()
        if(recipes.length === 0){
          return res.status(200)
          .send({
            status:"success",
            data: [],
            message: "no hay recetas en la base de datos",
          })
        }
        res.status(200).send({ status: "success", data: recipes})
    } catch (error) {
        res.status(500).send({ status: 'Failed', error: error.message})
    }
};


const addrecipe = async (req, res) => {
    try { //aqui haremos la peticion a la base de datos, si nos da error nos lo dira con lo de bajo
       const recipeData = req.body 
       await recipeModel.create(recipeData) //todas las interaciones que hagamos con nuestra base de datos async/await
         //los datos para mandarselos al frontend los sacamos del cuerpo
         res.status(200).send("la receta se ha creado correctamente")
    } catch (error) {
        res.status(500).send({ status: 'Failed', error: error.message})
    }
}


const getLastFive =  async (req,res) => {
  try {
    
      const recipes =   await recipeModel.find().sort({ _id:-1 }).limit(5)
      res.status(200).send(recipes)
  } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
  }
};


const getById = async (req, res) => {
  try {
      const idRecipe = req.params.idRecipe;console.log(idRecipe)
      const recipe = await recipeModel.findById(idRecipe);
      if(!recipe){
          return res.status(404).send("Receta no encontrada");
      }
      res.status(200).send(recipe);
  } catch  (error) {
      res.status(500).send({ status: 'failed', error: error.message })
  }

};

module.exports = { getAllRecipes, addrecipe, getLastFive, getById }