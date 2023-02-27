import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

window.onscroll = function () { addShadow() }

function addShadow() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("header").classList.add('header-scrolled');
    } else {
        document.getElementById("header").classList.remove('header-scrolled');
    }
}



function Header() {
    const [currentSelected, setCurrentSelected] = useState(window.location.pathname)

    function updateSelected() {
        setCurrentSelected(window.location.pathname)
    }
    return (
        <header id="header">
            <div className="header-content">
                <Link onClick={updateSelected} to="/"><h1>Francis English</h1></Link>
                <ul onClick={updateSelected}>
                    <Link to="/about"><li className={currentSelected === "/about" ? "selected" : ""}>About</li></Link>
                    <Link to="/"><li className={currentSelected === "/" ? "selected" : ""}>Porfolio</li></Link>
                    <Link to="/contact"><li className={currentSelected === "/contact" ? "selected" : ""}>Contact</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;