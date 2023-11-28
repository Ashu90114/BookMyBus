import React from "react";
import "./Cities.css";
import cityimg1 from "../../../../assets/citiesImgs/city1.jpg";
import cityimg2 from "../../../../assets/citiesImgs/city2.png";
import cityimg3 from "../../../../assets/citiesImgs/city3.jpg";
import cityimg4 from "../../../../assets/citiesImgs/city4.jpg";
import cityimg5 from "../../../../assets/citiesImgs/city5.jpg";
import cityimg6 from "../../../../assets/citiesImgs/city6.png";
import cityimg7 from "../../../../assets/citiesImgs/city7.jpg";
import cityimg8 from "../../../../assets/citiesImgs/city8.png";
import CityCard from "./CityCard";
import SectionHeading from "../Common/SectionHeading";

const Cities = () => {
    return (
        <section className="cities-section">
            <SectionHeading
                title="Travel Anywhere"
                subtitle="Travel in your favourite cities with us"
            />
            <div className="row">
                <CityCard
                    img={cityimg1}
                    cityName="Chandigarh"
                    // numberOfBuses={10}
                />
                <CityCard img={cityimg2} cityName="Jaipur" />
                <CityCard
                    img={cityimg3}
                    cityName="Amritsar"
                    // numberOfBuses={10}
                />
                <CityCard img={cityimg4} cityName="Manali" />
                <CityCard
                    img={cityimg5}
                    cityName="Lucknow"
                    // numberOfBuses={11}
                />
                <CityCard
                    img={cityimg6}
                    cityName="Haridwar"
                    // numberOfBuses={8}
                />
                <CityCard img={cityimg7} cityName="Mumbai" />
                <CityCard img={cityimg8} cityName="Delhi" />
            </div>
        </section>
    );
};
export default Cities;
