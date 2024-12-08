import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.scss";

export default function HeroSection({ title, subtitle, backgroundImage }) {
  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
      }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/" className={styles.homeLink}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>{title}</span>
        </nav>
      </div>
    </section>
  );
}
