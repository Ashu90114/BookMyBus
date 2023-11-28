import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="home" id="home">
            <div className="banner-content">
                <h3>Book your bus from here with lowest prices</h3>
                <h3>
                    {" "}
                    <span>BookMyBus</span>
                </h3>
            </div>
        </section>
    );
};

export default Banner;
