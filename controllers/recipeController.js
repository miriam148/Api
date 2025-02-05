const recipeModel = require('../models/recipeModel')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.find();

    if (recipes.length === 0) {
      return res.status(200).send({
        status: "success",
        data: [],
        message: "no hay recetas en la base de datos",
      });
    }
    res.status(200).send({ status: "success", data: recipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};




// const getAllRecipes = async (req, res) => {
//   try {
//     const recipes = await recipeModel.find()
//       .populate("likes", "_id") // Trae solo los _id de los usuarios que dieron like
//       .lean(); // Convierte los documentos a objetos JavaScript puros

//     // Transformamos la respuesta para incluir el número total de likes
//     const recipesWithLikesCount = recipes.map(recipe => ({
//       ...recipe,
//       likesCount: recipe.likes.length // Cuenta la cantidad de likes
//     }));

//     if (recipesWithLikesCount.length === 0) {
//       return res.status(200).send({
//         status: "success",
//         data: [],
//         message: "No hay recetas en la base de datos",
//       });
//     }

//     res.status(200).send({ status: "success", data: recipesWithLikesCount });
//   } catch (error) {
//     res.status(500).send({ status: "Failed", error: error.message });
//   }
// };



const addrecipe = async (req, res) => {
    try { 
       const recipeData = req.body 
       await recipeModel.create(recipeData) 
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
      const idRecipe = req.params.idRecipe;
      const recipe = await recipeModel.findById(idRecipe);
      if(!recipe){
          return res.status(404).send("Receta no encontrada");
      }
      res.status(200).send(recipe);
  } catch  (error) {
      res.status(500).send({ status: 'failed', error: error.message })
  }

};


const updateRecipe = async(req, res) => {
    try {
        const idRecipe = req.params.id
        console.log(idRecipe)
        const newRecipe = req.body
        const recipe = await recipeModel.findByIdAndUpdate(idRecipe, newRecipe, { new: true})
        if(!recipe){
            return res.status(404).send('Receta no encontrada')
        }
        res.status(200).send(recipe)
    } catch (error) {
        res.status(500).send({ status: 'Failed', error: error.message})
        
    }
}

const deleteRecipes = async (req, res) => {
  try {
      const idRecipe = req.params.id
      const recipe = await recipeModel.findByIdAndDelete(idRecipe)
      if(!recipe){
          return res.status(404).send('Receta no encontrada')
      }
      res.status(200).send('Se ha borrado correctamente')
      
  } catch (error) {
      res.status(500).send({ status: 'failed', error: error.message})
  }
}




module.exports = { getAllRecipes, addrecipe, getLastFive, getById, updateRecipe, deleteRecipes}