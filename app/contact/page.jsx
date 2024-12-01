import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import styles from "./layout.module.scss";

const contact = ({ children }) => {
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
            <h1 className="display-4 fw-bold text-black">Contact Us</h1>
            <p className={`fs-4 fs-md-5 text-black fw-bold`}>
              <Link href="/" className={`${styles[`hover-effect`]}`}>
                Home
              </Link>
              / Contact Us
            </p>
          </div>
        </div>
      </div>

      {/* card Section */}
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-4">
            {/* Email Card */}
            <div className={styles.card}>
              <a href="mailto:info@ibnomar.com.bd" className={styles.cardLink}>
                <i className="bi bi-envelope-fill"></i>
                <h3>Email Us:</h3>
                <p>info@ibnomar.com.bd</p>
                <p>omarfarukmib@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            {/* Call Card */}
            <div className={styles.card}>
              <i className="bi bi-telephone-fill"></i>
              <h3>Call Us:</h3>
              <p>Tel. +880 2226638040</p>
              <p>Tel. +880 1708420389</p>
            </div>
          </div>
          <div className="col-md-4">
            {/* Address Card */}
            <div className={styles.card}>
              <i className="bi bi-geo-alt-fill"></i>
              <h3>Address</h3>
              <p>Fahima Tower, 42-43 Purana Paltan, Dhaka-1000.</p>
              <p>(কেন্দ্রী হোটেলের পাশে গলির শেষ মাথায়)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fromSection">
        <div class="container pt-5 pb-5">
          <h2 class="text-center fw-bold mb-4">
            Drop Us A Message For Any Query
          </h2>
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <form>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="phone" class="form-label">
                      Your Phone
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="subject" class="form-label">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="terms" />
                  <label class="form-check-label" for="terms">
                    Accept{" "}
                    <a href="#" class="text-primary">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" class="text-primary">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </form>
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
};

export default contact;
