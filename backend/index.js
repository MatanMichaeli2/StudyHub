import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";

const app = express();
const port = 5000;

// Connect to MongoDB
const dbURI = "mongodb+srv://tomerza2:ciLDOAeMlZboe3FB@blogtest.bq06yi6.mongodb.net/blogs?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(cors());

// Serve static files from the frontend/public directory
app.use(express.static('../frontend/public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("/getData", (req, res) => {
  res.send("Hello");
});

app.use(bodyParser.urlencoded({ extended: true }));
