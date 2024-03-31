import React from "react";
import { BASE_URL } from "../../../constants";
import axios from "axios";
import { StudyGroupCard } from "./StudyGroupCard/StudyGroupCard";

export function StudyGroupsList({ studyGroups, setStudyGroups, user }) {
  const handleLeaveClick = async (group) => {
    if (!user) {
      return alert("Please login to leave a study group");
    }

    const updatedGroup = {
      ...group,
      participants: group.participants
        .filter(({ _id }) => _id !== user._id)
        .map(({ _id }) => _id),
    };

    const response = await axios.put(
      `${BASE_URL}/study-group/${group._id}`,
      updatedGroup
    );

    console.log("response.ok", response.ok);

    setStudyGroups(
      studyGroups.map((group) => {
        if (group._id === updatedGroup._id) {
          return updatedGroup;
        }
        return group;
      })
    );
  };

  const handleJoinClick = async (group) => {
    if (!user) {
      return alert("Please login to join a study group");
    }

    if (group.participants.length === group.maxParticipants) {
      return alert("Group is full");
    }

    const updatedGroup = {
      ...group,
      participants: [...group.participants, user._id],
    };

    const response = await axios.put(
      `${BASE_URL}/study-group/${group._id}`,
      updatedGroup
    );

    console.log("response.ok", response.ok);

    setStudyGroups(
      studyGroups.map((group) => {
        if (group._id === updatedGroup._id) {
          return updatedGroup;
        }
        return group;
      })
    );
  };

  return (
    <div className="study-group-container">
      {studyGroups.length === 0 ? (
        <p>No active study groups</p>
      ) : (
        studyGroups.map((group, index) => {
          const didJoinGroup =
            user && group.participants.some((p) => p._id === user._id);
          return (
            <StudyGroupCard
              group={group}
              didJoinGroup={didJoinGroup}
              handleJoinClick={handleJoinClick}
              handleLeaveClick={handleLeaveClick}
            />
          );
        })
      )}
    </div>
  );
}
