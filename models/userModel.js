const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  favoriteRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

const userModel = mongoose.model('User', UserSchema, "user");
module.exports = userModel
