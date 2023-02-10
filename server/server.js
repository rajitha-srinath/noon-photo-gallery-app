const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const postsRoutes = require("./routes/posts");
var cors = require('cors');

require("dotenv").config();

// App
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

// Routes
app.use("/api/posts", postsRoutes);

// DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const port = process.env.PORT || 8000;

    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & Server Running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
