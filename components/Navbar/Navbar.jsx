"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

export default function Navbar({ buttonText = "Checks Report", menusData }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPagePath = (title) => {
    switch (title) {
      case "Home":
        return "/";
      case "About":
        return "/about";
      case "Contact Us":
        return "/contact";
      case "Services":
        return "/m-services";
      case "Medical Procedure":
        return "/medical-procedure";
      case "Clients":
        return "/clients";
      case "Fitness Criteria":
        return "/fitness-criteria";
      case "Gallery":
        return "/gallery";
      case "Sister Concerns":
        return "/sister-concerns";
      default:
        return "#"; // Default to a placeholder or "#" if no route matches
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        isScrolled ? "bg-light shadow-sm" : "bg-white"
      } ${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
      style={{
        transition: "all 0.3s ease",
        padding: isScrolled ? "10px 15px" : "15px 100px", // Adjust padding on scroll
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className={`navbar-brand ${styles[`navbar-brand`]}`}>
          <Image
            src="/logo.jpg"
            alt="Logo"
            height={isScrolled ? 40 : 50} // Adjust logo size on scroll
            width={isScrolled ? 80 : 100}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${
            !isCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 fw-bold ${styles[`navbar-nav`]}`}
          >
            {menusData?.length > 0 ? (
              menusData.slice(0, 6).map((menu) => {
                const isActive = pathname === getPagePath(menu.name); // Check if menu item matches the current path
                return (
                  <li key={menu.id} className="nav-item">
                    <Link
                      href={getPagePath(menu.name)}
                      className={`nav-link active ${styles[`hover-effect`]} ${
                        isActive ? "text-primary" : ""
                      }`} // Apply "text-primary" for active page
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <li className="nav-item">
                <span className="nav-link">Loading...</span>
              </li>
            )}
          </ul>
          <div>
            <Link href="/check-report">
              <button className="btn btn-outline-primary ms-3">
                {pathname === "/" ? "Checks Mail" : "Checks Report"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
