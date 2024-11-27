"use client";
import React, { useEffect, useState } from "react";
import styles from "./scroll.module.scss";

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down 300px
    const checkScrollTop = () => {
      if (!isVisible && window.pageYOffset > 300) {
        setIsVisible(true);
      } else if (isVisible && window.pageYOffset <= 300) {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', checkScrollTop);
      return () => window.removeEventListener('scroll', checkScrollTop);
    }, [isVisible]);

  return (
    <button onClick={scrollToTop} className={`${styles.scrollBtn}`}>
      ↑
    </button>
  );
};

export default ScrollUp;
