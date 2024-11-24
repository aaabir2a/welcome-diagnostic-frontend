import Image from 'next/image'; // Import Next.js Image component
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Image
              src='/about-us.png'
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
              Welcome Medical & Diagnostic Center is run by skilled
              professionals with vast expertise. It is designed to meet
              international health security requirements.
            </p>
            <ul>
              <li>Use of updated technology</li>
              <li>Availability of different tests</li>
              <li>Ensuring quality tests</li>
              <li>Experienced medical teams</li>
            </ul>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
