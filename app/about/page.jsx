import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";

export default function About() {
  return (
    <>
      <div className="heroSection">
        <div
          className={`bg-image position-relative d-flex align-items-center justify-content-center text-white ${styles.BGimage}`}
        >
          {/* White shader overlay */}
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              top: 0,
              left: 0,
            }}
          ></div>

          <div className="container text-center position-relative">
            <h1 className="display-4 fw-bold text-black">About Us</h1>
            <p className={`fs-4 fs-md-5 text-black fw-bold`}>
              <Link href="/" className={`${styles[`hover-effect`]}`}>
                Home
              </Link>
              / About
            </p>
          </div>
        </div>
      </div>
      <div className="middleSection">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <div className={`${styles[`hover-effect`]}`}>
                <Image
                  src="/service-2.png"
                  alt="images"
                  className="card-img-top"
                  width={300}
                  height={750}
                />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className={`${styles[`hover-effect`]}`}>
                <h5 class="text-info">Why Choose Us</h5>
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
                </p>
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
