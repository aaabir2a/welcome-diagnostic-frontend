import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const mProcedure = ({children}) => {
  return (
    <>
    <div>medical procedure</div>
    <Navbar buttonText="Check Mail"/>
    <main>{children}</main>
    <Footer />
  </>
  )
}

export default mProcedure