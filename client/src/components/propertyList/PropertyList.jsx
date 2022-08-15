import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hua Hin, 華欣班武里府泰國 by JCS Chen" className="pListImg" />
            <div className="pListTitles">
                 <h1 className="pListTitles">Hotels</h1>
                 <h2 className="pListTitles">1122 Hotel Way</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1629371997433-d11e6161a8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Caroline-von-Humboldt-Weg, 10117 Berlin, Deutschland by Codo Jack" className="pListImg" />
            <div className="pListTitles">
                 <h1 className="pListTitles">Apartments</h1>
                 <h2 className="pListTitles">3344 Apartment Blvd</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Majestic Elegance - Punta Cana, Bavaro, Dominican Republic by Christian Lambert" className="pListImg" />
            <div className="pListTitles">
                 <h1 className="pListTitles">Resorts</h1>
                 <h2 className="pListTitles">5566 Resorts Ave</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="CasaClub, Mexico by Ciudad Maderas" className="pListImg" />
            <div className="pListTitles">
                 <h1 className="pListTitles">Villas</h1>
                 <h2 className="pListTitles">7788 Villas Cir</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Emerald Lake, Canada by Ian Keefe" className="pListImg" />
            <div className="pListTitles">
                 <h1 className="pListTitles">Cabins</h1>
                 <h2 className="pListTitles">9900 Cabins Pkwy</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
