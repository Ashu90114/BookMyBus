import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = (props) => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate  = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', values)
        .then(res=> {
            if(res.data.Status === "Success"){
                navigate('/')
            }else {
                alert(res.data.Error);
            }
        })
        .then(err => console.log(err));
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setValues({...values, email: e.target.value})} type="email" placeholder="youremail@gmail.com" id="email" name="email"  required/>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setValues({...values, password: e.target.value})} type="password" placeholder="********" id="password" name="password" required/>
                    <button type="submit">Log In</button>
                    <Link to='/register' className="btn">Don't have an account? Register here.</Link>
                </form>
            </div>
        </div>
    )
}