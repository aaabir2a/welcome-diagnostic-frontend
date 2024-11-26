import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./layout.module.scss";
import Link from "next/link";

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
        <div className= {"row"} >
          <div className="col-md-6">
            <div className={`colDiv ${styles.colDiv}`}>
            <p>Column 1</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`colDiv ${styles.colDiv}`}>
            <p>Column 2</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default fitness;
