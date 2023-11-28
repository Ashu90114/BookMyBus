import "./OfferCards.css";
import React from "react";

const OfferCards = (props) => {
    return (
        <div className="offer-cards">
            <img src={props.image} alt="" />
            <p>Grab this offer</p>
        </div>
    );
};

export default OfferCards;
