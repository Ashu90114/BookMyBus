import React from "react";

const CityCard = (props) => {
    return (
        <div className="cities-card">
            <img className="cities-img" src={props.img} alt="" />
            <div className="cities-txt">
                <p className="city">{props.cityName}</p>
            </div>
        </div>
    );
};

export default CityCard;
