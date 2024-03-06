import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

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

  // Set EJS as the view engine
app.set('view engine', 'ejs');

// Specify the directory where your views are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the frontend/public directory
app.use(express.static('../frontend/public'));

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the landing page
app.get("/",(req,res)=>{
  res.render("landingpage");
});

