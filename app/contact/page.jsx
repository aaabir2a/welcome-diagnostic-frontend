import React from "react";
import Link from "next/link";
import styles from "./layout.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";

const contact = ({ children }) => {
  return (
    <>

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
        <div className="container pt-5 pb-5">
          <h2 className="text-center fw-bold mb-4">
            Drop Us A Message For Any Query
          </h2>
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Your Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject" className="form-label">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    Accept{" "}
                    <a href="#" className="text-primary">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
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
