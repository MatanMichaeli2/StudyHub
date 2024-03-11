const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { userRouter } = require("./routes/userRoutes.js");
const CardScheme = require('./models/StudyGroupModel');
const {router} = require("./routes/AddStudyGroupRoute.js");
const groupRouter = require("./routes/StudyGroupRoutes.js");
const updateCardRouter = require("./routes/UpdateCardParticipants.js");

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

app.use("/createStudyGroup",router);

app.use("/getCard",groupRouter);

app.use("/updateCard",updateCardRouter);

// // Route to fetch study groups related to the logged-in teacher
// app.get("/getCard", async (req, res) => {
  // try {
    // // Get the ID of the logged-in teacher from the request or session
    // const loggedInTeacherId = req.user.username; // Assuming you have authentication middleware that adds the logged-in user to the request object
    
    // // Fetch study groups where the teacher field matches the logged-in teacher's ID
    // const studyGroups = await CardScheme.find({ teacher: loggedInTeacherId });

    // res.json(studyGroups);
  // } catch (error) {
    // console.error('Error fetching study groups:', error);
    // res.status(500).json({ message: 'Server error' });
  // }
// });


// Mount the update card routes under the /updateCard path



app.use(bodyParser.urlencoded({ extended: true }));
