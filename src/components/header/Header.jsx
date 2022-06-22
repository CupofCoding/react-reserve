import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
            </div>
        </div>
    </div>
  )
}

export default Header