import mongoose from "mongoose";

// Définition du schéma pour le modèle Post
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle 'Post' basé sur le schéma
const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
