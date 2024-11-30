import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import styles from "./layout.module.scss";

const contact = ({ children }) => {
  return (
    <>
      <div className="heroSection">
        <div
          className={`bg-image position-relative d-flex align-items-center justify-content-center text-white ${styles.BGimage}`}
        >
          {/* White shader overlay */}
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              top: 0,
              left: 0,
            }}
          ></div>

          <div className="container text-center position-relative">
            <h1 className="display-4 fw-bold text-black">About Us</h1>
            <p className={`fs-4 fs-md-5 text-black fw-bold`}>
              <Link href="/" className={`${styles[`hover-effect`]}`}>
                Home
              </Link>
              / About
            </p>
          </div>
        </div>
      </div>
      {/* card Section */}
      <div className={styles.container}>
        {/* Email Card */}
        <div className={styles.card}>
          <a href="mailto:info@ibnomar.com.bd" className={styles.cardLink}>
            <i className="bi bi-envelope-fill"></i>
            <h3>Email Us:</h3>
            <p>info@ibnomar.com.bd</p>
            <p>omarfarukmib@gmail.com</p>
          </a>
        </div>

        {/* Call Card */}
        <div className={styles.card}>
          <i className="bi bi-telephone-fill"></i>
          <h3>Call Us:</h3>
          <p>Tel. +880 2226638040</p>
          <p>Tel. +880 1708420389</p>
        </div>

        {/* Address Card */}
        <div className={styles.card}>
          <i className="bi bi-geo-alt-fill"></i>
          <h3>Address</h3>
          <p>Fahima Tower, 42-43 Purana Paltan, Dhaka-1000.</p>
          <p>(কেন্দ্রী হোটেলের পাশে গলির শেষ মাথায়)</p>
        </div>
      </div>

      <div className="map">
        <h2>Our Location</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default contact;
