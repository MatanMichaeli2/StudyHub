// TeacherMainPage.js
import React from 'react';
import StudyGroupCard from '../../components/TeacherComponents/StudyGroupCard';
import TeacherNav from '../../components/TeacherComponents/TeacherNav';

const TeacherMainPage = () => {
  return (
    <div>
        {<TeacherNav />}
        {<StudyGroupCard />}
    </div>
  );
};

export default TeacherMainPage;
