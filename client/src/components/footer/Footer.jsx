import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Hotels </li>
                <li className="fListItem">Apartments </li>
                <li className="fListItem">Resorts </li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">Cabins</li>
                <li className="fListItem">Camping Grounds</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Special stays</li>
                <li className="fListItem">Reviews</li>
                <li className="fListItem">Travel articles</li>
                <li className="fListItem">Travel communities </li>
                <li className="fListItem">Seasonal and holiday deals </li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Car rentals</li>
                <li className="fListItem">Flight Finder</li>
                <li className="fListItem">Restaurant reservations </li>
                <li className="fListItem">Travel Agencies </li>
            </ul>
            <ul className="fList">
            <li className="fListItem">Customer Service</li>
            <li className="fListItem">Partner Help</li>
            <li className="fListItem">Careers</li>            
            <li className="fListItem">Safety Resource Center</li>            
            <li className="fListItem">Terms &amp; conditions</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2022 PeasTravel</div>
    </div>
  )
}

export default Footer
