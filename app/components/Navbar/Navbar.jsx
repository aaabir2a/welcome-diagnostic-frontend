"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import styles from "./Navbar.module.scss";

const Navbar = ({ buttonText = "Checks Report" }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300); // Detect scroll past 300px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar bg-white navbar-expand-lg sticky-top ${
        isScrolled ? 'w-100' : ''
      }`}

      style={{
        transition: 'width 0.3s ease',
        maxWidth: isScrolled ? '100%' : '1200px',
        margin: '0 auto',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="col-md-4 text-center">
          <Link href="/" className="navbar-brand">
            <Image src="/logo.jpg" alt="Logo" width={200} height={100} />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col-md-6">
        <div
          className={`collapse text-center navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/m-services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/medical-procedure" className="nav-link">
                Medical Procedure
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/fitness-criteria" className="nav-link">
                Fitness Criteria
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          
        </div>
        </div>

        <div className="col-md-2">
        <div>
        <Link href="/check-report">
            {pathname === "/" ? (
              <button className={`btn btn-outline-primary ms-3 ${styles.btn} `}>
                Checks Mail
              </button>
            ) : (
              <button className={`btn btn-outline-primary ms-3`}>
                Checks Report
              </button>
            )}
          </Link>
        </div>
        </div>

        
        
      </div>
    </nav>
  );
};

export default Navbar;
