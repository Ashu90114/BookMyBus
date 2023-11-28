import React from "react";
import OffersCard from "../Components/Shared/OffersComponent/OffersCard";
import offerImg4 from "../assets/offersImgs/offer10.png";
import offerImg1 from "../assets/offersImgs/offer1.jpg";
import offerImg3 from "../assets/offersImgs/offer3.jpg";
import offerImg5 from "../assets/offersImgs/offer5.png";
import offerImg6 from "../assets/offersImgs/offer6.png";
import offerImg8 from "../assets/offersImgs/offer8.png";
function Foffers() {
    return (
        <div className="foffers-div">
            <h1 className="offerHeading">Offers at BookMyBus</h1>
            <OffersCard imageurl={offerImg1} />
            <OffersCard imageurl={offerImg8} />
            <OffersCard imageurl={offerImg3} />
            <OffersCard imageurl={offerImg4} />
            <OffersCard imageurl={offerImg5} />
            <OffersCard imageurl={offerImg6} />
        </div>
    );
}

export default Foffers;
