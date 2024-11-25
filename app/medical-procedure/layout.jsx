import React, { Children } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const mlayout = ({children}) => {
  return (
   <div>
    <Navbar buttonText='Check Mail'/>
    <main>{children}</main>
    <Footer/>
   </div>
  )
}

export default mlayout