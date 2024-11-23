// "use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = ({ buttonText = "Check Report" }) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${styles.navbar}`}>
          <div className="container">
            <Link className="navbar-brand" href="/">Welcome Diagnostic & Medical Center</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/m-services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/medical-procedure">Medical Procedure</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/fitness-criteria">Fitness Criteria</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact Us</Link>
                </li>
              </ul>
              <Link href="/check-report">
          <button className={`btn btn-outline-primary ms-3 ${styles.btn} `}>{buttonText}</button>
        </Link>
            </div>
          </div>
        </nav>
      );
};

export default Navbar;
