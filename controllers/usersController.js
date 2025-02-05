
const userModel = require('../models/userModel')
const recipeModel = require('../models/recipeModel')

const addToFavourites = async (req,res) => {
    try {
      const { idRecipe } = req.params
      const idUser = req.payload._id
      if(!idUser) {
        return res.status(200).send('Usuario no encontrado'); 
  
      }
  
      const user = await userModel.findById(idUser)
      const isIncluded = user.favoriteRecipes.includes(idRecipe)
      if(isIncluded){
        return res.status(200).send('Ya tengo esa receta'); 
      }
      user.favoriteRecipes.push(idRecipe)
      user.save()
      return res.status(200).send(user); 
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  }


//   const getFavoriteRecipes = async (req, res) => {
//     try {
//         // Obtener el ID del usuario logueado desde el token
//         const userId = req.user._id;

//         // Buscar al usuario en la base de datos
//         const user = await userModel.findById(userId).populate("favoriteRecipes");

//         if (!user) {
//             return res.status(404).send({ error: "Usuario no encontrado" });
//         }

//         // Devolver las recetas favoritas
//         res.status(200).send({ favoriteRecipes: user.favoriteRecipes });
//     } catch (error) {
//         res.status(500).send({ status: "Failed", error: error.message });
//     }
// };



const getFavoriteRecipes = async (req, res) => {
  try {
    const userId = req.payload._id;

    if (!userId) {
      return res
        .status(400)
        .send({ error: "ID de usuario no encontrado en el token" });
    }

    const user = await userModel.findById(userId).populate("favoriteRecipes");

    if (!user) {
      return res.status(404).send({ error: "Usuario no encontrado" });
    }

    res.status(200).send({ favoriteRecipes: user.favoriteRecipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};



const removeFromFavoritesRecipes = async (req,res) => {
  try {
    const { idRecipe } = req.params
    const idUser = req.payload._id
   
    if(!idUser) {
      return res.status(200).send('Usuario no encontrado'); 

    }

    const user = await userModel.findById(idUser)
    console.log(user)
    const isIncluded = user.favoriteRecipes.includes(idRecipe)
    if(!isIncluded){
      return res.status(200).send('No tienes esa receta'); 
    }
    user.favoriteRecipes = user.favoriteRecipes.filter((id) =>id.toString() !== idRecipe)
    user.save()
    return res.status(200).send(user); 
  } catch (error) {
    res.status(500).send({ status: 'Failed', error: error.message})
  }
}


const updateUser = async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const newUser = req.body;
    const user = await userModel.findByIdAndUpdate(idUser, newUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ status: 'failed', error: error.message})
  }
};

  module.exports = { addToFavourites, getFavoriteRecipes, removeFromFavoritesRecipes, updateUser }