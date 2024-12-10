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
                <i className="fa-solid fa-circle-check text-primary me-2"
                style={{lineHeight: "inherit"}}
                ></i>
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
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className={`${styles[`hover-effect`]}`}>
              <Image
                src={FitnessImage}
                alt="Building"
                width={600}
                height={600}
                className="img-fluid" // Makes the image responsive
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={`${styles[`hover-effect`]}`}>
              {/* Render dynamic parsed content */}
              <div>{parsedContent}</div>

              {/* Render dynamic parsed about content with FontAwesome icons */}
              <div className="mt-3">{parsedAboutContent}</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Fitness;
