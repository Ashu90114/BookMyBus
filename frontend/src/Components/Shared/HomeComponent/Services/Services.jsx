import React from "react";
import "./Services.css";
import SerImg1 from "../../../../assets/servicesImgs/service1.png";
import SerImg2 from "../../../../assets/servicesImgs/service2.png";
import SerImg3 from "../../../../assets/servicesImgs/service3.png";
import SerImg4 from "../../../../assets/servicesImgs/service4.png";
import SerImg5 from "../../../../assets/servicesImgs/service5.png";
import SerImg6 from "../../../../assets/servicesImgs/service6.png";
import SectionHeading from "../Common/SectionHeading";

const Services = () => {
    return (
        <section className="services-section">
            <SectionHeading
                title="Reliable Experience every time"
                subtitle="We Promise To Deliver"
            />
            <br />
            <div className="imgContainer">
                <div className="row ">
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg1} alt=""></img>
                        <p className="services-text">Premium Lounge</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg2} alt=""></img>
                        <p className="services-text">Deep Cleaned Buses</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg3} alt=""></img>
                        <p className="services-text">Insured Trip</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg4} alt=""></img>
                        <p className="services-text">On Time Guarantee</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg5} alt=""></img>
                        <p className="services-text">Live Tracking</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className="imageItem" src={SerImg6} alt=""></img>
                        <p className="services-text">Zero Cancellation Fees</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
