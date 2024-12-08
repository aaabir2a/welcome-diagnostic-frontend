"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";
import { useContext } from "react";
import { AboutContext } from "./aboutprovider";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function About() {
  // Access context data
  const { aboutContent, aboutImage } = useContext(AboutContext);
  console.log("aboutiii content", aboutContent);
  console.log("aboutiii image", aboutImage);
  return (
    <>
      <HeroSection
        title="About Us"
        backgroundImage={aboutImage}
      />
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
                {/* <h5 className="text-info">Why Choose Us</h5>
                <h2>A leading light in healthcare</h2>
                <p className="fs-5">
                  Welcome Medical & Diagnostic Center is run by a group of
                  skilled professionals and administrators with vast experience
                  & expertise in their respective fields. The name of the
                  organization implies its commitments and nature of jobs it can
                  perform. It is designed to meet the international health
                  security requirements.
                <br/>
                
                  With state-of-the-art facilities, we focus on screening
                  migrants, ensuring high-quality healthcare, and addressing
                  global health concerns with precision and care.
                
                <br/>
                  NEED OF HEALTH SCREENING: With the progress of civilization,
                  developments and globalization peoples are, now a day, moving
                  very fast around the world. It is now very well known that in
                  recent years increased global mobility has aided the spread of
                  infectious diseases and allowed previously localized pathogens
                  to establish <br/> themselves worldwide and we understand every
                  society and the government of every region is very much
                  concerned with this global problem. It must be understood when
                  there is apprehension of danger of threat, Prevention and
                  protection are necessary.
                  <br/> 
                  We as well share the concern because
                  many job seekers and students from this country have been
                  moving to different countries every year and from this
                  understanding and commitment to contribute a little to fight
                  the global problem.
                </p> */}
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
}
