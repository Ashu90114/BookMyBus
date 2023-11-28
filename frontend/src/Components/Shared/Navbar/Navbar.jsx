import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillBusFrontFill } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
	const [auth, setAuth] = useState(false);
	const [admin, setAdmin] = useState(false);
	const [message, setMessage] = useState('')
	const [name, setName] = useState('')
	axios.defaults.withCredentials = true;

	useEffect(()=>{
		axios.get('http://localhost:5000')
		.then(res =>{
			if(res.data.Status === "Success"){
				setAuth(true);
				setName(res.data.name)
				if(res.data.email == 'admin@gmail.com'){
					setAdmin(true);
				}
			}else {
				setAuth(false)
				setMessage(res.data.Error)
			}
		})
		.then(err => console.log(err));
	})
	const handleLogout =() =>{
		axios.get('http://localhost:5000/logout')
		.then(res =>{
			window.location.reload(true);
		}).catch(err => console.log(err));
	}
	return (
		<div className="navbar">
			<nav className="flex space-between">
				<div className="left flex items-center">
				
					<NavLink to="/">
						<BsFillBusFrontFill className="logo-img"/>
						
					</NavLink>

					<h3 className="navbar-brand">
						<NavLink to="/">BookMyBus</NavLink>
					</h3>

					<div className="mx-2">
						<NavLink to="/">Home</NavLink>
					</div>
					<div className="mx-2">
						<NavLink to="/aboutus">About</NavLink>
					</div>
					<div className="mx-2">
						<NavLink to="/offers">Offers</NavLink>
					</div>
					<div className="mx-2">
						{
							admin?
							<div className="mx-2">	
								<NavLink to="/busDetails">Bus Details</NavLink>
							</div>
							: <span></span>
						}
					</div>
				</div>
				<div className="right flex items-center">
					<div className="mx-2">
						<NavLink to="/contact">Contact Us</NavLink>
					</div>
					<div className="mx-2">
						{
							auth?
							<div className="mx-2">	
								<NavLink onClick={handleLogout}>Logout</NavLink>
								<div className="mx-2">
									<p>{name}</p>
								</div>
							</div>
							:
							<NavLink to="/login">Login</NavLink>
						}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
