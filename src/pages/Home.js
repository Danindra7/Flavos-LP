import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HomeCard from '../container/HomeCard'

function Home() {
    return (
        <div className="home-container">
            <HeroSection />
            <HomeCard />
            <Footer />
        </div>
    )
}


export default Home
