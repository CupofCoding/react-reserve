import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBed, faCar, faFaceGrinBeam, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem">
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
    </div>
  )
}

export default Header