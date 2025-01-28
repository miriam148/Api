const mongoose = require("mongoose");


const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  category: { type: String, required: true },
  imageUrl: { type: String },
  difficulty: { type: String, enum: ["fácil", "medio", "difícil"], required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
