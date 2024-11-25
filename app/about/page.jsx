import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";


export default function About() {
  return <section style={{ padding: "50px", textAlign: "center" }}>
        <div className={styles.about}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>About Us</h1>
        <p>
          <Link href="/">Home</Link> / About
        </p>
      </div>

      {/* Section 1: Why Choose Us */}
      <section className={styles.whyChooseUs}>
        <div className={styles.content}>
          <h2>Why Choose Us</h2>
          <p>
            Welcome Medical & Diagnostic Center is run by a group of skilled
            professionals and administrators with vast experience & expertise
            in their respective fields. The name of the organization implies
            its commitments and nature of jobs it can perform. It is designed
            to meet the international health security requirements.
          </p>
          <p>
            With state-of-the-art facilities, we focus on screening migrants,
            ensuring high-quality healthcare, and addressing global health
            concerns with precision and care.
          </p>
        </div>
        <Image
          src="/about-us.png"
          alt="Doctor holding pills"
          width={500}
          height={300}
        />
      </section>

      {/* Section 2: Interactive Cards */}
      <section className={styles.interactiveSection}>
        <h2>Need for Health Screening</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Global Health Challenges</h3>
            <p>
              Addressing global infectious diseases and promoting preventive
              care worldwide.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Advanced Screening</h3>
            <p>
              State-of-the-art technology for early detection and accurate
              diagnostics.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Commitment to Quality</h3>
            <p>
              A trusted partner in delivering reliable healthcare services with
              international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Google Map */}
      <section className={styles.mapSection}>
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
      </section>
    </div>

  </section>;
}
