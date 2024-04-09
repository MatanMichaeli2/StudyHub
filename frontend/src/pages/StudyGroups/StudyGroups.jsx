import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./StudyGroups.css";
import { StudentAddGroup } from "./components/StudentAddGroup";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { StudyGroupsList } from "./components/StudyGroupsList";

export function StudyGroups({ user, studyGroups, setStudyGroups,fetchStudyGroups }) {
  return (
    <div className="settings-page">
      <div className="settings-content">
        <h1 className="heading">Study Groups</h1>
        {user && <StudentAddGroup user={user} />}
        <StudyGroupsList
          user={user}
          studyGroups={studyGroups}
          setStudyGroups={setStudyGroups}
          fetchStudyGroups={fetchStudyGroups}
        />
      </div>
    </div>
  );
}
