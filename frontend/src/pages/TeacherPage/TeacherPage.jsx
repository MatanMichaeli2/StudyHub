import React from "react";
import Navbar from "../../components/TecherMainPage/Navbar";
import StudyGroupCard from "../../components/TecherMainPage/StudyGroupCard";
import Footer from '../../components/TecherMainPage/Footer';
import './Teacher.css'
function TecherMainPage(){
    return(
        <div>
        <Navbar />
        <StudyGroupCard />
        <Footer />
        </div>
    );
}

export default TecherMainPage;

