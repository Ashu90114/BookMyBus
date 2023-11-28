import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { passwordStrength } from 'check-password-strength';
import axios from "axios";

export const Register = (props) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phonenumber: '',
        password: ''
    })
    const testResult = passwordStrength(values.password);
    const createPassLabel = () => {
        if(testResult.length < 2){
            return '';
        }
        else {
            return testResult.value;
        }
    }
    const num = testResult.id * 100/4;
    const funcProgressColor = () => {
        switch(testResult.id) {
          case 0:
            return '#828282';
          case 1:
            return '#EA1111';
          case 2:
            return '#FFAD00';
          case 3:
            return '#9bc158';
          case 4:
            return '#00b500';
          default:
            return 'none';
        }
    }
    const changePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '7px'
    })

    const navigate  = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', values)
        .then(res=> {
            if(res.data.Status === "Success"){
                navigate('/')
            }else {
                alert("Error")
            }
        })
        .catch(err => console.log("Cannot submit the request"));
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input name="name" onChange={(e) => setValues({...values,name: e.target.value})} id="name" placeholder="full Name" required/>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setValues({...values, email: e.target.value})} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input onChange={(e) => setValues({...values, phonenumber: e.target.value})} type="tel" pattern="[0-9]{10}" placeholder="7012345678" id="phonenumber" name="phonenumber" required/>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setValues({...values, password: e.target.value})} type="password"  placeholder="********" id="password" name="password" required/>
                    <div className="progress" style={{ height: '7px' }}>
                        <div className="progress-bar" style={changePasswordColor()}></div>
                    </div>
                    <h4 style={{ color: funcProgressColor() }}>{createPassLabel()}</h4>
                    <button type="submit">Sign Up</button>
                    <Link to='/login' className="btn" >Already have an account? Login here.</Link>
                </form>
            </div>
        </div>
    )
}
