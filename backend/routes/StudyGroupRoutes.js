// StudyGroupRoutes.js
const express = require("express");
const studyGroupRouter = express.Router();
const StudyGroup = require("../models/StudyGroupModel");
const { StudyGroupModel } = require("../models/StudyGroupModel"); // Assuming StudyGroupModel is the correct model
const { UserModel } = require("../models/users");

// Route to fetch study groups related to the logged-in teacher

studyGroupRouter.get("/card", async (req, res) => {
  try {
    // Get the username of the logged-in teacher from the query parameters
    const loggedInTeacherName = req.query.loggedInTeacherUsername;

    const filter = loggedInTeacherName ? { teacher: loggedInTeacherName } : {};

    // Fetch study groups where the teacher field matches the logged-in teacher's username
    const studyGroups = await StudyGroupModel.find(filter).populate({
      path: "participants",
      select: "firstName lastName",
    });

    res.json(studyGroups);
  } catch (error) {
    console.error("Error fetching study groups:", error);
    res.status(500).json({ message: "Server error" });
  }
});

studyGroupRouter.put("/:groupId", async (req, res) => {
  const updatedStudyGroup = req.body;
  console.log("updatedStudyGroup", updatedStudyGroup);
  const { groupId } = req.params;

  try {
    const updatedGroup = await StudyGroupModel.findByIdAndUpdate(
      groupId,
      updatedStudyGroup,
      { new: true }
    );
    console.log("group updated", updatedGroup);
    res.json(updatedGroup);
  } catch (error) {
    console.error("Error updating study group:", error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = { studyGroupRouter };
