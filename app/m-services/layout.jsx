import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export const metadata = {
    title: 'Services - Ibn Omar Medical Center',
    description: 'Explore our range of trusted medical services.',
  };

const layout = ({children}) => {
  return (
    <>
      
    <Navbar buttonText="Check Mail"/>
    <main>{children}</main>
    <Footer />
  </>
  )
}

export default layout