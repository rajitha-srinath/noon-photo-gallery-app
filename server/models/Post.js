const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    userName: {
      type: String,
    },
    userAvatar: {
      type: String,
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
    },
    des: {
      type: String,
    },
    hash: {
      type: String,
    },
    liked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
