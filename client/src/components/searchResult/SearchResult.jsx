import "./searchResult.css"

const SearchResult = () => {
  return (
    <div className="searchRes">
        <img 
            src="https://picsum.photos/250/250" 
            alt="" 
            className="searchResImg" 
        />
        <div className="searchResDesc">
            <div className="searchResTitles">
                <h1 className="searchResTitle">Location Name</h1>
                <div className="searchResRating">
                    <span>Excellent</span>
                    <button>4.5</button>
                </div>
            </div>
            <div className="searchResDetails">
                <span className="searchResSlogan">"Quote/Review about stay." - Customer</span>
                <div className="searchResInfo">
                    <div className="searchResDepart">
                        <div className="searchResItem">
                            <span className="searchResLocation">Location Street Address</span>
                            <span className="searchResAirline">City, ST, Country</span>
                        </div>
                    </div>
                    <div className="searchResCost">
                        <div className="searchResItem">
                            <span className="searchResCostAdult"><h2>$160</h2></span>
                            <span className="searchResCostAdultSubTitle sub-text">includes taxes and fees</span>
                        </div>
                        <div className="searchResItem">
                            <button className="searchResCheckButton">See availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult
