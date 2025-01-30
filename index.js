const express = require('express');
const loginRouter = require("./routes/loginRouter")
const recipeRouter = require("./routes/recipeRouter")
const usersRouter = require('./routes/usersRouter')
const cors = require("cors");
require('dotenv').config();
const connecToDataBase = require('./db/db')

const app = express();

app.use(express.json());

connecToDataBase()

<<<<<<< HEAD

=======
const loginRouter = require("./routes/loginRouter")
const recipeRouter = require("./routes/recipeRouter")
const usersRouter = require('./routes/usersRouter')
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69



const User = require('./models/userModel')

app.use('/api', loginRouter)
app.use('/api', recipeRouter)
app.use('/api', usersRouter)


app.listen(3000, () => {
    console.log("Server is running http://localhost:3000");
  });
   

module.exports = app












