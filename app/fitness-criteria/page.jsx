import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>;

const fitness = ({ children }) => {
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
      <div className="middleSection">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
            <div className={`${styles[`hover-effect`]}`}>
              <Image
                src="/service-3.png" // Replace with your image path
                alt="Building"
                width={600}
                height={600}
              />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className={`${styles[`hover-effect`]}`}>
                <h6 class="text-primary">FITNESS CRITERIA</h6>
                <h2 class="fw-bold">A Leading Light in Healthcare</h2>
                <p class="mt-3">
                  SUBJECT WITH THE FOLLOWING DISEASES ARE CONSIDERED UNFIT TO
                  WORK IN ANY COUNTRY
                </p>
                <h5 class="fw-bold text-decoration-underline">
                  Infectious Diseases:
                </h5>
                <ul class="list-unstyled mt-3">
                  <li class="d-flex align-items-start mb-2">
                    <i class="fa-solid fa-circle-check text-primary me-2"></i>
                    <span>HIV AIDS Reactive</span>
                  </li>
                  <li class="d-flex align-items-start mb-2">
                    <i class="fa-solid fa-circle-check text-primary me-2"></i>
                    <span>
                      Hepatitis B Surface Antigen Positive And Anti HCV
                    </span>
                  </li>
                  <li class="d-flex align-items-start mb-2">
                    <i class="fa-solid fa-circle-check text-primary me-2"></i>
                    <span>
                      Microfilaria Positive & Malaria Blood Film Positive
                    </span>
                  </li>
                  <li class="d-flex flex-column mb-2">
                    <div class="d-flex align-items-start">
                      <i class="fa-solid fa-circle-check text-primary me-2"></i>
                      <span>Tuberculosis – Any Type</span>
                    </div>
                    <ul class="list-unstyled ms-4">
                      <li>
                        A- Pulmonary By Chest X-Ray Showing Active Or Past
                        Evidence Of Old T.B. Including Minimum Fibrosis,
                        Calcification And Pleural Thickening
                      </li>
                      <li>B- Tuberculosis Pleural Effusion</li>
                      <li>C- Tuberculosis Lymphadenitis</li>
                    </ul>
                  </li>
                  <li class="d-flex align-items-start">
                    <i class="fa-solid fa-circle-check text-primary me-2"></i>
                    <span>
                      Venereal Diseases, VDRL Positive And TPHA Positive
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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

export default fitness;
