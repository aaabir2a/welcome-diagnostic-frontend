"use client";
import React, { useContext, useState } from "react";
import styles from "./layout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { MedicalContext } from "./MedicalProvider";

const Mpage = () => {
  // Access context data
  const { MedicalContent, MedicalImage } = useContext(MedicalContext);
  const [steps, setSteps] = useState([]);

  // Parse MedicalContent if running on the client side
  if (typeof window !== "undefined" && steps.length === 0 && MedicalContent) {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(MedicalContent, "text/html");
    const listItems = doc.querySelectorAll("ul li");

    const parsedSteps = Array.from(listItems).map((item) => {
      const title = item.querySelector("h3")?.textContent || "No Title";
      const content = item.querySelector("p")?.textContent || "No Content";
      return { title, content };
    });

    setSteps(parsedSteps); // Set the parsed steps in state
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="middleSection">
        <div className="container pt-5 pb-5 text-center">
          <h5 className="text-primary">Procedure</h5>
          <h2>Making you better, every time</h2>
          <h6>Steps of Medical Service Delivery</h6>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
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
                            className={`step-number me-3 ${styles[`step-number`]}`}
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
                        data-bs-parent="#customAccordion"
                      >
                        <div className="accordion-body">{step.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className={`${styles[`hover-effect`]}`}>
                <Image
                  src={MedicalImage || "/default-image.png"}
                  alt="Medical service"
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

export default Mpage;
