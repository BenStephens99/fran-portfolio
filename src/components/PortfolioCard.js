import React from "react";

function PortfolioCard(props) {
    return (
        <div className="work">
            <img src={props.image} alt=""/>
                <h2>{props.name}</h2>
        </div>
        )
}

export default PortfolioCard;