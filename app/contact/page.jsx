"use client"
import React, { useContext, useState } from "react";
import styles from "./layout.module.scss";
import { ContactContext } from "./ContactProvider";
import emailjs from "emailjs-com";

const Contact = () => {
  const {EmailContent, CallContent, AddressContent} = useContext(ContactContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4t2c3k3", 
        "template_bfp5ii1", 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "LWAfADAQLTFyUfsws" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus({ success: false, message: "Failed to send message." });
        }
      );
  };
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
                <div 
                dangerouslySetInnerHTML={{ __html: EmailContent }}
                ></div>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            {/* Call Card */}
            <div className={styles.card}>
              <i className="bi bi-telephone-fill"></i>
             <div
             dangerouslySetInnerHTML={{ __html: CallContent }}
             ></div>
            </div>
          </div>
          <div className="col-md-4">
            {/* Address Card */}
            <div className={styles.card}>
              <i className="bi bi-geo-alt-fill"></i>
              <div 
              dangerouslySetInnerHTML={{ __html: AddressContent }}
              ></div>
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
            {status.message && (
              <div
                className={`alert ${
                  status.success ? "alert-success" : "alert-danger"
                }`}
              >
                {status.message}
              </div>
            )}
            {status.success ? (
              <button
                className="btn btn-primary mt-3"
                onClick={() => setStatus({ success: false, message: "" })}
              >
                Again
              </button>
            ) : (
              <form onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      value={formData.phone}
                      onChange={handleChange}
                      required
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
                      value={formData.subject}
                      onChange={handleChange}
                      required
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>

      


    </>
  );
};

export default Contact;
