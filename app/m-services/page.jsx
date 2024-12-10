"use client";

import Image from "next/image";
import styles from "./service.module.scss";
import { ServiceContext } from "./ServiceProvider";
import { useContext } from "react";
import Link from "next/link";

export default function MServices() {
  const { ServicesContent, ServicesAboutContent, serviceImage } =
    useContext(ServiceContext);

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
            <Image
              src={serviceImage}
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
            <div
              dangerouslySetInnerHTML={{ __html: ServicesAboutContent }}
              style={{ width: "184%" }}
            ></div>
            <ul className="list-unstyled mt-4">
              {ServicesContent.split(/<\/?p>/)
                .filter((text) => text.trim() !== "") // Remove empty strings from splitting
                .map((text, index) => (
                  <li className="d-flex align-items-start mb-3" key={index}>
                    <i className="fas fa-check-circle text-primary me-3" 
                    style={{lineHeight: "inherit"}}
                    ></i>
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                  </li>
                ))}
            </ul>

            <Link href="/about">
            <button
              className={`btn btn-primary btn-hover mt-4 ${
                styles[`btn-hover`]
              }`}
            >
              About Us
            </button>
            </Link>


          </div>
        </div>
      </div>
     
    </>
  );
}
