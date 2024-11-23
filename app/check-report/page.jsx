import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const checkReport = ({children}) => {
  return (
    <>
      
    <Navbar buttonText="Check Mail"/>
    <div>report</div>
    <main>{children}</main>
    <Footer />
  </>
  )
}

export default checkReport