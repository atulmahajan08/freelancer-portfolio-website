import React from 'react'
import About from './About'
import ContactUs from './ContactUs'
import CopyRight from './CopyRight'
import Footer from './Footer'
import Navbar from './Navbar'
import PortFolioCards from './PortFolioCards'
import Profile from './Profile'

const PortFolio = () => {
  return (
    <div>
        <Navbar />
        <Profile />
        <PortFolioCards />
        <About />
        <ContactUs />
        <Footer />
        <CopyRight />
    </div>
  )
}

export default PortFolio