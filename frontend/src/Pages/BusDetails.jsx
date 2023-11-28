import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { passwordStrength } from 'check-password-strength';
import axios from "axios";
import DatePicker from "react-datepicker";


export const BusDetails = (props) => {
    const [values, setValues] = useState({
        pickup: '',
        destination: '',
        price: '',
        datetime:''
    })
    // const [startDate, setStartDate] = useState(new Date());

    const navigate  = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values.datetime);
        axios.post('http://localhost:5000/busDetails', values)
        .then(res=> {
            if(res.data.Status === "Success"){
                navigate('/')
            }else {
                alert("Error")
            }
        })
        .catch(err => console.log("Unable to submit data"));
    }

    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Add Bus Details</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="pickup">Enter the Starting Point</label>
                    <input name="pickup" onChange={(e) => setValues({...values, pickup: e.target.value})} id="pickup" placeholder="FROM"  required/>
                    <label htmlFor="destination">Enter the Destination Point</label>
                    <input onChange={(e) => setValues({...values, destination: e.target.value})} placeholder="To" id="email" name="destination"  required/>
                    <label htmlFor="price">Price</label>
                    <input onChange={(e) => setValues({...values, price: e.target.value})} placeholder="200" id="price" name="price"  required/>
                    <label htmlFor="datetime">Enter the travel date</label>
                    {/* <DatePicker name="datetime" selected={startDate} onChange={(date) => setStartDate(date)} className='datetime'/> */}
                    <input onChange={(e) => setValues({...values, datetime: e.target.value})} type="date"  id="date" name="datetime" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
