import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">StudyHub</div>
            <div className="auth-buttons">
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Header;