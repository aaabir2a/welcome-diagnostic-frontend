import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const contact = ({children}) => {
  return (
    <>
      {/* Pass a custom button text for the Navbar */}
      <Navbar buttonText="Check Mail" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default contact