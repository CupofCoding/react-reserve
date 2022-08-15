import React from 'react'
import "./recommended.css"

const Recommended = () => {
  return (
    <div className='recommended'>
      <div className='recommendedItem'>
        <img src='https://images.unsplash.com/photo-1515524042669-de726ea3283d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2125&q=80' alt="Fort Lewis Lodge &amp; Farm by Collin Armstrong" className='recommendedImg grow'/>
        <div className="recommendedTitles">
          <h1>Fort Lewis Lodge</h1>
          <h2>Millboro, VA</h2>
        </div>
      </div>
      <div className='recommendedItem'>
        <img src='https://images.unsplash.com/photo-1516906561371-53f48df1254d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="Vinales, Cuba by Kenan Kitchen" className='recommendedImg grow'/>
        <div className="recommendedTitles">
          <h1>Vinales Garden</h1>
          <h2>Vinales, Cuba</h2>
        </div>
      </div>
      <div className='recommendedItem'>
        <img src='https://images.unsplash.com/photo-1592327379194-7964e6a5c1e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80' alt="Fair Head, Ballycastle, Northern Ireland, UK by K. Mitch Hodge" className='recommendedImg grow'/>
        <div className="recommendedTitles">
          <h1>Fair Head</h1>
          <h2>Northern Ireland, UK</h2>
        </div>
      </div>

      
    </div>
  )
}

export default Recommended
