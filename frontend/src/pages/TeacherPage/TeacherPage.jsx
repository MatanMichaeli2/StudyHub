import React from "react";
import Navbar from "../../components/TecherMainPage/Navbar";
import StudyGroupCard from "../../components/TecherMainPage/StudyGroupCard";
import Footer from '../../pages/TeacherPage/TeacherPage';
import './Teacher.css'
function TecherMainPage(){
    return(
        <div>
        <Navbar />
        <StudyGroupCard />
        </div>
    );
}

export default TecherMainPage;

