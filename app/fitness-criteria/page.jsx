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
      <div>
        <div
          className={`bgDiv d-flex align-items-center justify-content-center ${styles.bgDiv}`}
        >
          <div className={`content text-center ${styles.content}`}>
            <h2 className="text-white mb-4">Medical Fitness Criteria</h2>
            <div>
              <p>
                <Link href="/">Home</Link> / About
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p></p>
      </div>
      <div className={`container ${styles.container}`}>
        <div className={"row"}>
          <div className={`col-md-6 ${styles[`col-md-6`]}`}>
            {/* Left Section: Image */}
            <div className={styles.imageContainer}>
              <Image
                src="/service-1.png"
                alt="Service Building"
                width={600}
                height={400}
                className={styles.serviceImage}
              />
              <div className={styles.experienceBadge}>
                7 YEARS OF EXPERIENCE
              </div>
            </div>
          </div>
          <div className={`col-md-6 ${styles[`col-md-6`]}`}>
            <div className={styles.container}>
              <h6 className="text-primary">FITNESS CRITERIA</h6>
              <h1 className="fw-bold">A Leading Light in Healthcare</h1>
              <p className="text-secondary">
                SUBJECT WITH THE FOLLOWING DISEASES ARE CONSIDERED UNFIT TO WORK
                IN ANY COUNTRY
              </p>

              <h4 className="mt-4">Infectious Diseases:</h4>
              <ul className={styles.diseaseList}>
                <li className={styles.listItem}>
                  <i className="fa-solid fa-circle-check text-primary me-2"></i>
                  HIV AIDS Reactive
                </li>
                <li className={styles.listItem}>
                  <i className="fa-solid fa-circle-check text-primary me-2"></i>
                  Hepatitis B Surface Antigen Positive And Anti HCV
                </li>
                <li className={styles.listItem}>
                  <i className="fa-solid fa-circle-check text-primary me-2"></i>
                  Microfilaria Positive & Malaria Blood Film Positive
                </li>
                <li className={styles.listItem}>
                  <i className="fa-solid fa-circle-check text-primary me-2"></i>
                  <strong>Tuberculosis – Any Type</strong>
                  <ul className={styles.subList}>
                    <li className={styles.subListItem}>
                      A - Pulmonary By Chest X-Ray Showing Active Or Past
                      Evidence Of Old T.B. Including Minimum Fibrosis,
                      Calcification, And Pleural Thickening
                    </li>
                    <li className={styles.subListItem}>
                      B - Tuberculosis Pleural Effusion
                    </li>
                    <li className={styles.subListItem}>
                      C - Tuberculosis Lymphadenitis
                    </li>
                  </ul>
                </li>
                <li className={styles.listItem}>
                  <i className="fa-solid fa-circle-check text-primary me-2"></i>
                  Venereal Diseases, VDRL Positive And TPHA Positive
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default fitness;
