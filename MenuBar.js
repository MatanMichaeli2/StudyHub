import React, { useState } from "react";
import './MenuBar.css';

const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <button className="menu-button" onClick={openMenu}> 
            &#9776; 
            </button>

            {isMenuOpen &&
                <div className="menu-bar">
                    <ul>
                        <p>Menu</p>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                        <li>Menu Item 4</li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default MenuBar;