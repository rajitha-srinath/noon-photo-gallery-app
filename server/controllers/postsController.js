const Post = require("../models/Post");
const mongoose = require("mongoose");

// Test route
const testPostRoute = async (req, res) => {
  res.status(200).json({ msg: "Posts works..." });
};

// Get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

//Get liked posts
const getLikedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ liked: true });

    if (!posts) {
      return res.json({ posts: "There are no liked posts" });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add Post
const addPost = async (req, res) => {
  const { userName, userAvatar, image, likes, des, hash, liked } = req.body;

  try {
    const post = await Post.create({
      userName,
      userAvatar,
      image,
      likes,
      des,
      hash,
      liked,
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add Like
const addLike = async (req, res) => {
  const { id, liked } = req.body;

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        liked: liked,
      },
    },
    { new: true }
  );

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

module.exports = {
  testPostRoute,
  addPost,
  addLike,
  getPosts,
  getLikedPosts,
};
