const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { userRouter } = require("./routes/userRoutes.js");
const CardScheme = require('./models/StudyGroupModel');
const updateCardRoutes = require("./routes/UpdateCardParticipants.js");

const app = express();
const port = 3001;

// Connect to MongoDB

const dbURI =
  "mongodb+srv://tomerza2:393624422Tz@blogtest.bq06yi6.mongodb.net/?retryWrites=true&w=majority&appName=BlogTest";

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// Serve static files from the frontend/public directory
app.use(express.static("../frontend/public"));
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.get("/getCard", (req, res) => {
  CardScheme.find()
  .then(cards => res.json(cards))
  .catch(err => res.json(err))
});

// Mount the update card routes under the /updateCard path
app.use("/updateCard", updateCardRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
