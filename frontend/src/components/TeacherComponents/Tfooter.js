import React from 'react';
import './TeacherCss/Tfooter.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
    const navigate = useNavigate(); // Initialize navigate

    function logOut() {
        navigate('/'); // Navigate to the 'landing' page
    }

    // Inline style for the logout button
    const buttonStyle = {
        backgroundColor: '#ff0000', // Red background color
        color: '#fff', // White text color
        padding: '10px 20px', // Padding
        border: 'none', // No border
        borderRadius: '5px', // Rounded corners
        cursor: 'pointer', // Pointer cursor on hover
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">&#169; All Rights Reserved StudyHub</p>
                <p className="logo">&#169; StudyHub</p>
            </div>
            {/* Apply inline style to the logout button */}
            <button className="logout-button" style={buttonStyle} onClick={logOut}>Logout</button>
        </footer>
    );
}

export default Footer;
