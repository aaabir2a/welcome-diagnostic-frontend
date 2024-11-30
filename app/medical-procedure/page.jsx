"use client";
import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";

const mpage = () => {
  const steps = [
    {
      title: "MANPOWER PASSENGERS",
      content:
        "documents for his identity and, after payment of requisite fees, issues",
    },
    {
      title: "FRONT DESK",
      content:
        "The Cash Officer checks up his relevant papers/documents for his identity and, after payment of requisite fees, issues the papers for medical check-up and directs him to the medical inspection room.",
    },
    {
      title: "REGISTRATION AND CASH COUNTER",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, est odio nobis voluptas placeat quaerat totam. Quam quo eius aut, omnis exercitationem nesciunt unde debitis ea laborum deserunt dolorum tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe id animi et voluptate, dolorum",
    },
    {
      title: "MEDICAL INSPECTION ROOM",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "SAMPLE COLLECTION BOOTH",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "X-RAY ROOM",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "PATHLAB",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "PROCESS ROOM",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "CHIEF MEDICAL OFFICER",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
    {
      title: "REPORT DELIVERY DESK",
      content:
        "The Medical Officer Thoroughly Examines The Passengers And If Found Physically Fit, He Is Sent To The Sample Collection Booth For Sample Collection.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
        <div className="container pt-5 pb-5 text-center">
          <h5 className="text-primary">Procedure</h5>
          <h2>Making you better, every time</h2>
          <h6>Steps of Medical Service Delivery</h6>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <div className={`${styles[`hover-effect`]}`}>
                  <h2 className="mb-4">Process Steps</h2>
                  <div className="accordion" id="customAccordion">
                    {steps.map((step, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              activeIndex === index ? "" : "collapsed"
                            }`}
                            onClick={() => toggleAccordion(index)}
                          >
                            <span
                              className={`step-number me-3 ${
                                styles[`step-number`]
                              }`}
                            >
                              {index + 1}
                            </span>
                            {step.title}
                          </button>
                        </h2>
                        <div
                          className={`accordion-collapse collapse ${
                            activeIndex === index ? "show" : ""
                          }`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#processAccordion"
                        >
                          <div className="accordion-body">{step.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className={`${styles[`hover-effect`]}`}>
                <Image
                  src="/service-2.png"
                  alt="images"
                  className="card-img-top"
                  width={300}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default mpage;
