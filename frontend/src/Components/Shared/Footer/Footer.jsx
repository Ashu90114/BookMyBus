import React from "react";
import "./Footer.css";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp} from "react-icons/bs"
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="col-1">
				<h3>About</h3>
				<NavLink to="/offers">Offers</NavLink>
				<NavLink to="/aboutus">About Us</NavLink>
				<NavLink to="/contact">Contact Us</NavLink>
			</div>

			<div className="col-2">
				<h3>Contact</h3>
				<p>
					Noida sector 62, Logix park
					<br />
					10th floor c wing
				</p>
				<div className="social">
					<BsFacebook />
					<BsInstagram />
					<BsWhatsapp/>
					<BsTwitter />
					<BsLinkedin />
				</div>
			</div>

			<div className="col-3">
				{/* <img
					src="https://cdn-icons-png.flaticon.com/512/748/748481.png?w=740&t=st=1666000669~exp=1666001269~hmac=c1a70a67ef3824596ce3f4c76b7536dc630bb5ca01d24102561a56d626d92372"
					alt=""
				/> */}
				<h3>BookMyBus</h3>
				<p>
					BookMyBus is the world's largest online <br />
					bus ticket booking service trusted by over 25
					<br />
					million happy customers globally.BookMyBus <br />
					offers bus ticket booking through its website
					<br />
					for all major routes.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
