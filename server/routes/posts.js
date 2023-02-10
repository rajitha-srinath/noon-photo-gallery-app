const express = require("express");
const { testPostRoute, addPost, addLike, getPosts, getLikedPosts } = require("../controllers/postsController");

const router = express.Router();

// Test route
router.get("/test", testPostRoute);

// Get all posts
router.get("/", getPosts);

// Get liked posts
router.get("/liked", getLikedPosts);

// Add Post
router.post("/addPost", addPost);

// Add Like
router.post("/addLike", addLike);

module.exports = router;
