import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import styles from "./layout.module.scss";



const contact = ({ children }) => {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>
          <Link href="/">Home</Link> / Contact Us
        </p>
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
    </>
  );
};

export default contact;
