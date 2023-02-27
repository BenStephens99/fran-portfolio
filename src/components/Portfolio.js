import React from "react";
import PortfolioCard from "./PortfolioCard";
import dummy1 from '../images/dummyimg1.jpeg';
import dummy2 from '../images/dummyimg2.jpeg';
import dummy3 from '../images/dummyimg3.jpeg';


function Porfolio() {
    return (
        <div className="work-container" id="top">
            <PortfolioCard name="My Movie" image={dummy1}/>
            <PortfolioCard name="My Movie" image={dummy2}/>
            <PortfolioCard name="My Movie" image={dummy3}/>
            <PortfolioCard name="My Movie" image={dummy1}/>
            <PortfolioCard name="My Movie" image={dummy2}/>
            <PortfolioCard name="My Movie" image={dummy3}/>
        </div>
    )

}

export default Porfolio;