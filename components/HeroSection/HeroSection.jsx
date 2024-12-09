import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.scss";
import { BASE_URL, GET_SLIDERSETTINGS } from "@/constant/constant";
import { dataFetcher } from "@/utils/dataFetcher";

export default async function HeroSection({ title, subtitle, backgroundImage }) {
  const sliderIamge = (await dataFetcher(GET_SLIDERSETTINGS))?.homepage_sliders;
  const backgroundImageUrl = sliderIamge[0]?.image
    ? `${BASE_URL}${sliderIamge[4].image}`
    : "/bg.jpg";
  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`, // Dynamically set the background image
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
