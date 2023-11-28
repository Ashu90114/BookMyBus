import React , {useState} from 'react'
import "./searchBar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBus, faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const searchBar = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
        <div className="searchContainer">
            <div className="homeSearch">
                <div className="homeSearchItem">
                    <FontAwesomeIcon icon={faBus} className='fromIcon'/>
                    <input type="text" placeholder='From' className='homeSearchInput'/>
                </div>
                <div className="homeSearchItem">
                    <FontAwesomeIcon icon={faBus} className='fromIcon'/>
                    <input type="text" placeholder='To' className='homeSearchInput'/>
                </div>
                <div className="homeSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className='fromIcon'/>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date'/>
                </div>
                <div className="homeSearchItem">
                    <button className='searchBtn'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default searchBar
