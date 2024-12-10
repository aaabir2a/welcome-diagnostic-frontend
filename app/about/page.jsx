"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";
import { useContext } from "react";
import { AboutContext } from "./aboutprovider";


export default function About() {
  // Access context data
  const { aboutContent, aboutImage } = useContext(AboutContext);
  return (
    <>

      <div className="middleSection">
        
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <div className={`${styles[`hover-effect`]}`}>
                <Image
                  src={aboutImage}
                  alt="images"
                  className="card-img-top"
                  width={300}
                  height={750}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="col-12"
                dangerouslySetInnerHTML={{ __html: aboutContent }}
                style={{ width: "184%" }}
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
