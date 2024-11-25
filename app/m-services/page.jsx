import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Image from 'next/image'
import styles from "./service.module.scss";



const mServices = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        {/* Left Section: Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/service-1.png"
            alt="Service Building"
            width={600}
            height={400}
            className={styles.serviceImage}
          />
          <div className={styles.experienceBadge}>7 YEARS OF EXPERIENCE</div>
        </div>

        {/* Right Section: Text Content */}
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>SERVICES</h3>
          <h2 className={styles.subtitle}>
            Industry Leading Technology Enhances Health
          </h2>
          <ul className={styles.featuresList}>
            <li>Clinical Laboratory Investigations With Professional Technologists And Materials.</li>
            <li>Radiology And Imaging Services With Modern Machineries And Materials.</li>
            <li>Reporting And Recording With Utmost Care And Accuracy Using Modern Tools.</li>
            <li>Comprehensive And Complete Physical And Mental Check-Up Facilities With Full Care And Counseling.</li>
          </ul>
          <button className={styles.aboutButton}>About Us</button>
        </div>
      </div>
    </div>
  
  )
}

export default mServices