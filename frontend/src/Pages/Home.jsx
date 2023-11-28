import React from "react";
import SearchBar from "../Components/Shared/SearchBar/searchBar";
import bgImg from "../HomeBannerImg.svg"
import "../App.css"
import Footer from "../Components/Shared/Footer/Footer";
import Cities from "../Components/Shared/HomeComponent/Cities/Cities";
import Banner from "../Components/Shared/HomeComponent/Banner/Banner";
import Reviews from "../Components/Shared/HomeComponent/Reviews/Reviews";
import Services from "../Components/Shared/HomeComponent/Services/Services";
import Offers from "../Components/Shared/HomeComponent/Offers/Offers";

const Home = () => {
    return (
        <>
            <div>
                <SearchBar />
                <img src={bgImg} alt="No Img" className="bgImg"/>
                <Banner />
                <Cities />
                <Offers />
                <Reviews />
                <Services />
                <Footer />
            </div>
        </>
    );
};

export default Home;
