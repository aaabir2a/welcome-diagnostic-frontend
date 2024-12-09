"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Image from "next/image";
import { FitnessContext } from "./FitnessProvider";

const Fitness = () => {
  const { FitnessContent, FitnessAboutContent, FitnessImage } = useContext(FitnessContext);
  const [parsedContent, setParsedContent] = useState([]);
  const [parsedAboutContent, setParsedAboutContent] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Function to parse HTML string and dynamically add FontAwesome icons
      const parseHTML = (htmlString, addIcons = false) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const content = Array.from(doc.body.childNodes);

        return content.map((node, index) => {
          if (node.nodeName === "LI" && addIcons) {
            // Add FontAwesome icon dynamically to list items
            return (
              <li key={index} className="d-flex align-items-start mb-2">
                <i className="fa-solid fa-circle-check text-primary me-2"></i>
                <span>{node.textContent}</span>
              </li>
            );
          } else if (node.nodeName === "UL") {
            // Recursively parse nested lists
            return (
              <ul key={index} className="list-unstyled ms-4">
                {parseHTML(node.innerHTML, true)}
              </ul>
            );
          } else {
            // Render other nodes (e.g., <h5>, <p>) directly
            return React.cloneElement(<div />, { key: index, dangerouslySetInnerHTML: { __html: node.outerHTML } });
          }
        });
      };

      // Parse content when running on the client
      setParsedContent(parseHTML(FitnessContent));
      setParsedAboutContent(parseHTML(FitnessAboutContent, true));
    }
  }, [FitnessContent, FitnessAboutContent]);

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-6">
            <div className={`${styles[`hover-effect`]}`}>
              <Image
                src={FitnessImage}
                alt="Building"
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="col-6 ">
            <div className={`${styles[`hover-effect`]}`}>
              {/* Render dynamic parsed content */}
              <div>{parsedContent}</div>

              {/* Render dynamic parsed about content with FontAwesome icons */}
              <div className="mt-3">{parsedAboutContent}</div>
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

export default Fitness;
