import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Recommended from '../../components/recommended/Recommended'
// import StateList from '../../components/stateList/StateList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Recommended />
        <h1 className="domesticTitle">Browse by Type</h1>
        {/* <StateList /> */}
      </div>
    </div>
  )
}

export default Home;