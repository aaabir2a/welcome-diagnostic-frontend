import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className="row">
            <div className={`col-md-3 col-sm-6 ${styles['col-md-3']}`}>
              <div className={styles.footerSection}>
                <h3>About Us</h3>
                <ul className={styles.footerLinks}>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Medical Procedure</a></li>
                  <li><a href="#">Fitness Criteria</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className={`col-md-3 col-sm-6 ${styles['col-md-3']}`}>
              <div className={styles.footerSection}>
                <h3>Important Links</h3>
                <ul className={styles.footerLinks}>
                  <li><a href="#">BAIRA</a></li>
                  <li><a href="#">BOESL</a></li>
                  <li><a href="#">Ministry of Labour and Employment</a></li>
                  <li><a href="#">GCC Website</a></li>
                  <li><a href="#">ENJAZ IT</a></li>
                  <li><a href="#">MOFA Check</a></li>
                </ul>
              </div>
            </div>
            <div className={`col-md-3 col-sm-6 ${styles['col-md-3']}`}>
              <div className={styles.footerSection}>
                <h3>Address</h3>
                <p className={styles.footerAddress}>
                  Sonir Akhra<br />
                  42-43 Dhaka<br />
                  Dhaka-1000, Bangladesh.
                </p>
                <p className={styles.footerContact}>
                  <a href="mailto:info@ibnomar.com.bd">info@WelcomeMedical.com.bd</a><br />
                  <a href="tel:+880 2226638040">+880 000000000</a><br />
                  <a href="tel:+880 1708420389">+880 000000000</a>
                </p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-6 ${styles['col-md-3']}`}>
              <p>Column 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
