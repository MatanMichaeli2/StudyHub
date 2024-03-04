import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

//connect to mongo db
const dbURI = "mongodb+srv://tomerza2:ciLDOAeMlZboe3FB@blogtest.bq06yi6.mongodb.net/blogs?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


