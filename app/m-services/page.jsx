import React from "react";
import Image from "next/image";
import styles from "./service.module.scss";
import Link from "next/link";

const mServices = () => {
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
            <h1 className="display-4 fw-bold text-black">Services</h1>
            <p className={`fs-4 fs-md-5 text-black fw-bold`}>
              <Link href="/" className={`${styles[`hover-effect`]}`}>
                Home
              </Link>
              / Services
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
            <Image
              src="/service-3.png" // Replace with your image path
              alt="Building"
              className="img-fluid rounded"
              width={600}
              height={500}
            />
            {/* <div className={`experience-badge bg-primary text-white ${styles[`experience-badge`]}`}>
            7 YEARS OF EXPERIENCE
          </div> */}
          </div>

          {/* Right Content Section */}
          <div className="col-md-6">
            <h5 className="text-primary">SERVICES</h5>
            <h2 className="fw-bold">
              Industry Leading Technology Enhances Health
            </h2>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>
                  Clinical Laboratory Investigations With Professional
                  Technologist And Materials.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>
                  Radiology And Imaging Services With Modern Machineries And
                  Materials.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>
                  Reporting And Recording With Utmost Care And Accuracy Using
                  Modern Tools.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-primary me-3"></i>
                <span>
                  Comprehensive And Complete Physical And Mental Check-Up
                  Facilities With Full Care And Counseling.
                </span>
              </li>
            </ul>
            <button
              className={`btn btn-primary btn-hover mt-4 ${
                styles[`btn-hover`]
              }`}
            >
              About Us
            </button>
          </div>
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

export default mServices;
