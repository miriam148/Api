const express = require('express');
require('dotenv').config();
const connecToDataBase = require('./db/db')

const app = express();

app.use(express.json());

connecToDataBase()

const loginRouter = require("./routes/loginRouter")
const recipeRouter = require("./routes/recipeRouter")




const User = require('./models/userModel')

app.use('/api', loginRouter)
app.use('/api', recipeRouter)


app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
  });
   

module.exports = app












