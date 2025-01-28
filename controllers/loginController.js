
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')


const signup = async (req, res) => {
    try {
        const { name, email, password, role} = req.body
        const newUser = {
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role
        }
        await userModel.create(newUser)
        // await sendEmail(email)
        res.status(200).send("Usuario creado correctamente")
    } catch (error) {
    
        if (error.code === 11000) {
            return res
            .status(500)
            .send({ status: "Failed", error: "El correo ya existe" })
        }
    
        res.status(500).send({ status: "failed", error: error.message })
        
    }
    }

    module.exports = { signup }