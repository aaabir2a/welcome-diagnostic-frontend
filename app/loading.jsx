

import React from "react";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Loading...</h1>
        <p className={styles.heroSubtitle}>Please wait while we prepare your content.</p>
      </div>
      <div className={`container ${styles.sectionContainer}`}>
        <div className="row">
          <div className="col-6">
            <div className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonTextSmall}></div>
            </div>
          </div>
          <div className="col-6">
            <div className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonTextSmall}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
