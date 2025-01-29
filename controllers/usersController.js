
const userModel = require('../models/userModel')

const addToFavourites = async (req,res) => {
    try {
      const { idRecipe } = req.params
      const idUser = req.payload._id
      if(!idUser) {
        return res.status(200).send('Usuario no encontrado'); 
  
      }
  
      const user = await userModel.findById(idUser)
      const isIncluded = user.favoritas.includes(idRecipe)
      if(isIncluded){
        return res.status(200).send('Ya tengo esa peli'); 
      }
      user.favoritas.push(idRecipe)
      user.save()
      return res.status(200).send(user); 
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  }

  module.exports = { addToFavourites }