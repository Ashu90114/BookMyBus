import "./Offers.css";
import React from "react";
import OfferCards from "./OfferCards";
import OfferImg1 from "../../../../assets/offersImgs/offer1.jpg";
import OfferImg2 from "../../../../assets/offersImgs/offer2.jpg";
import OfferImg3 from "../../../../assets/offersImgs/offer3.jpg";
import SectionHeading from "../Common/SectionHeading";

const Offers = () => {
    return (
        <section className="offers-section">
            <SectionHeading
                title="Book Your Travel with Exclusive Offers"
                subtitle="Get the most exciting offers on Bus Ticket booking"
            />
            <div className="offer-container">
                <OfferCards image={OfferImg1} />
                <OfferCards image={OfferImg2} />
                <OfferCards image={OfferImg3} />
            </div>
        </section>
    );
};

export default Offers;
