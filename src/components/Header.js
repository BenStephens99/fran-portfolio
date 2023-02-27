import React from "react";  
import { Link } from "react-router-dom";
window.onscroll = function() {addShadow()}

function addShadow (){
    if(document.documentElement.scrollTop > 15) {
        document.getElementById("header").classList.add('header-scrolled');
    } else {
        document.getElementById("header").classList.remove('header-scrolled');
    }
}

function Header () {
    return (
        <header id="header">
        <div class="header-content">
            <h1>Francis English</h1>
            <ul>
                <Link to="/about"><li>About</li></Link>
                <Link to="/"><li>Porfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    </header>
    ) 
}

export default Header;