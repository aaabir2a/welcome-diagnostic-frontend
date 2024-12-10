import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/constant/constant';

const Footer = ({email,logo,address,phone}) => {
  
  return (
    <>
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <Image
              src={`${BASE_URL}${logo}`}
              alt="IBN Omar Logo"
              width={600}
              height={100}
              style={{ maxWidth: '120px' }}
            />
                    <p>
              The IBN OMAR Medical & Diagnostic Services with its facilities and
              services is capable of screening migrant/guest workers and other
              international travelers from infectious and ...
            </p>
            {/* Social Icons */}
            <div>
              <a href="#" className="text-light me-3">
                <i className={`fab fa-facebook fa-2x ${styles[`hover-effect`]}`}></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className={`fab fa-linkedin fa-2x ${styles[`hover-effect`]}`}></i>
              </a>
              <a href="#" className="text-light">
                <i className={`fab fa-twitter fa-2x ${styles[`hover-effect`]}`}></i>
              </a>
            </div>
          </div>

          {/* All About Us */}
          <div className="col-md-2 mb-4">
            <h5>All About Us</h5>
            <ul className={styles.custom}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/procedure">Medical Procedure</Link>
              </li>
              <li>
                <Link href="/fitness">Fitness Criteria</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="col-md-3 mb-4">
            <h5>Important Links</h5>
            <ul className={styles.custom}>
              <li>
                <Link href="#">BAIRA</Link>
              </li>
              <li>
                <Link href="#">BOESL</Link>
              </li>
              <li>
                <Link href="#">Ministry of Labour and Employment</Link>
              </li>
              <li>
                <Link href="#">GCC Website</Link>
              </li>
              <li>
                <Link href="#">ENJAZ IT</Link>
              </li>
              <li>
                <Link href="#">MOFA Check</Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-3 mb-4">
            <h5>Address</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i> 
              {address}
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> {email}
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> {phone}<br />
              <i className="fas fa-phone me-2"></i> {phone}
            </p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">
            Copyright ©2024 Welcome Diagnostic & Medical Center | Designed by{' '}
            <a href="http://www.bluebayit.com/" className="text-primary text-decoration-none">
              Bluebay IT Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
