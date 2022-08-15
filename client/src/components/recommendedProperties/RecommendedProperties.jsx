import React from 'react'
import "./recommendedProperties.css"

const RecommendedProperties = () => {
  return (
    <div className="rp">
        <div className="rpItem">
            <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="Av Damero, Holbox, Q.R., Mexico by Kelsey Curtis" className="rpImg" />
            <span className="rpName">Hotel Para Ti</span>
            <span className="rpCity">Holbox, Q.R, Mexico</span>
            <span className="rpPrice">Starting from $123</span>
            <div className="rpRating">
                <button>4.4</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="rpItem">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Ao Nang, Thailand by Sara Dubler" className="rpImg" />
            <span className="rpName">Pinthong Aonang Villa</span>
            <span className="rpCity">Ao Nang Beach, Thailand</span>
            <span className="rpPrice">Starting from $36</span>
            <div className="rpRating">
                <button>4.8</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="rpItem">
            <img src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Fujairah Resort ClubFujairah by Jeffrey Francisco" className="rpImg" />
            <span className="rpName">InterContinental Fujairah Resort Club</span>
            <span className="rpCity">Fujairah, United Arab Emirates</span>
            <span className="rpPrice">Starting from $127</span>
            <div className="rpRating">
                <button>4.6</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="rpItem">
            <img src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt="PURO Hotel Krakow, Krakow, Poland by Mateo Fernandez" className="rpImg" />
            <span className="rpName">PURO Hotel Kraków Stare Miasto</span>
            <span className="rpCity">Krakow, Poland</span>
            <span className="rpPrice">Starting from $103</span>
            <div className="rpRating">
                <button>4.6</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default RecommendedProperties
