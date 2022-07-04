import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBed, faCalendarDays, faCar, faFaceGrinBeam, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {
    const [openCalendar, setOpenCalendar] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faFaceGrinBeam} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">Sales pitch goes here. It's hard.</h1>
            <p className="headerDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur placeat odio alias provident veniam maxime, porro dignissimos exercitationem suscipit magnam asperiores, cumque architecto consequuntur iure vel ut minima eius incidunt!</p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder='Where do you want to go?' className='headerSearchInput' />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span className='headerSearchText' onClick={()=>setOpenCalendar(!openCalendar)}> 
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </span> 
                    {/* MM has to be capitalized otherwise it reflects minutes... */}
                    {/* && for is true */}
                    {openCalendar && <DateRange
                        className='dateCalender'
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        />}
                </div> 
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className='headerSearchText'>1 adult 2 children 1 room</span>
                </div> 
                <div className="headerSearchItem">
                    <button className="headerButton">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header