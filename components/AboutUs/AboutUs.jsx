import Image from "next/image"; // Import Next.js Image component
import styles from "./AboutUs.module.scss";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Image
            src="/about-us.png"
            alt="About Us"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
        <div className="col-md-6">
          <h2 className={styles.title}>
            Modern And Trusted Medical & Diagnostic Center
          </h2>
          <p>
            Welcome Medical & Diagnostic Center is run by skilled professionals
            with vast expertise. It is designed to meet international health
            security requirements.
          </p>
          <ul>
            <li>Use of updated technology</li>
            <li>Availability of different tests</li>
            <li>Ensuring quality tests</li>
            <li>Experienced medical teams</li>
          </ul>
          <Link href="/about">
            <button className="btn btn-primary">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
