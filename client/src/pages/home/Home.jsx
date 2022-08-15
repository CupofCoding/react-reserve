import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Recommended from '../../components/recommended/Recommended'
import PropertyList from '../../components/propertyList/PropertyList'
import RecommendedProperties from '../../components/recommendedProperties/RecommendedProperties'
import EmailList from '../../components/emailList/EmailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Recommended />
        <h1 className="homeTitle">Browse by Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Places recommended by guests!</h1>
        <RecommendedProperties />
        <EmailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home;