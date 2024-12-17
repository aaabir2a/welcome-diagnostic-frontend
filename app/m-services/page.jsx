"use client";

import Image from "next/image";
import styles from "./service.module.scss";
import { ServiceContext } from "./ServiceProvider";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function MServices() {
  const {
    ServicesContent1,
    ServicesAboutContent1,
    ServicesContent2,
    ServicesAboutContent2,
    ServicesContent3,
    ServicesAboutContent3,
    serviceImage1,
    serviceImage2,
    serviceImage3,
  } = useContext(ServiceContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      content: ServicesContent1,
      aboutContent: ServicesAboutContent1,
      image: serviceImage1,
    },
    {
      content: ServicesContent2,
      aboutContent: ServicesAboutContent2,
      image: serviceImage2,
    },
    {
      content: ServicesContent3,
      aboutContent: ServicesAboutContent3,
      image: serviceImage3,
    },
  ];

  // Check if the viewport is mobile and update state accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger initially to set the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle slide navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Automatically move to the next slide every 3 seconds (if not in mobile view)
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className={`${styles.sliderWrapper} position-relative pt-5 pb-5`}>
      {!isMobile && (
        <div className={`${styles.carouselInner} d-flex`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : "d-none"
              }`}
            >
              <div
                className={`d-flex align-items-center vh-100 ${styles.slide}`}
              >
                <div className="container pt-5 pb-5">
                  <div className="row align-items-center">
                    {/* Left Image Section */}
                    <div className="col-md-6">
                      <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="img-fluid rounded"
                        width={600}
                        height={500}
                      />
                    </div>

                    {/* Right Content Section */}
                    <div className="col-md-6">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: slide.aboutContent,
                        }}
                      ></div>
                      <ul className="list-unstyled mt-4">
                        {slide.content
                          .split(/<\/?p>/)
                          .filter((text) => text.trim() !== "")
                          .map((text, index) => (
                            <li
                              className="d-flex align-items-start mb-3"
                              key={index}
                            >
                              <i
                                className="fas fa-check-circle text-primary me-3"
                                style={{ lineHeight: "inherit" }}
                              ></i>
                              <span
                                dangerouslySetInnerHTML={{ __html: text }}
                              ></span>
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
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Render content directly for mobile */}
      {isMobile && (
        <div
          className={`${styles.mobileContainer} overflow-auto`}
          style={{ maxHeight: "30vh" }} // Allows scrollability
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.mobileSlide} mb-4 p-3 border-bottom`}
            >
              <Image
                src={slide.image}
                alt={`Service Image ${index + 1}`}
                className="img-fluid rounded"
                width={600}
                height={500}
              />
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: slide.aboutContent }}
              ></div>
              <ul className="list-unstyled mt-4">
                {slide.content
                  .split(/<\/?p>/)
                  .filter((text) => text.trim() !== "")
                  .map((text, subIndex) => (
                    <li
                      className="d-flex align-items-start mb-3"
                      key={subIndex}
                    >
                      <i
                        className="fas fa-check-circle text-primary me-3"
                        style={{ lineHeight: "inherit" }}
                      ></i>
                      <span dangerouslySetInnerHTML={{ __html: text }}></span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <Link href="/about">
            <button
              className="btn btn-primary btn-hover mt-4 w-100"
              style={{ width: "100%" }}
            >
              About Us
            </button>
          </Link>
        </div>
      )}

      {/* Carousel Indicators */}
      {!isMobile && (
        <div className={styles["carousel-indicators"]}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles["carousel-dot"]} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      {/* Controls for Larger Devices */}
      {!isMobile && (
        <div className="container pt-2 pb-2">
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}
