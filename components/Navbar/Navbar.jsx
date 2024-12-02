"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";
import { fetchMenuData, GET_MENUS_ALL_NESTED } from "@/lib/api";

export default function Navbar({ buttonText = "Checks Report", menusData }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [menus, setMenus] = useState(menusData);

  // useEffect(() => {
  //   async function getMenu() {
  //     // const res = await fetch(GET_MENUS_ALL_NESTED);
  //     // const data = await res.json();
  //     const data = await fetchMenuData();
  //     console.log("Fetched menus:", data);
  //     setMenus(data.menus); // Set the data fetched from the API
  //   }
  //   getMenu();
  // }, []);

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
      case "Contact":
        return "/contact";
      case "Service":
        return "/m-services";
      case "Profile":
        return "/medical-procedure";
      case "Clients":
        return "/fitness-criteria";
      case "Message":
        return "/fitness-criteria";
      case "Gallery":
        return "/fitness-criteria";
      case "Sister Concerns":
        return "/fitness-criteria";
          

      default:
        return "#"; // Default to a placeholder or "#" if no route matches
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        isScrolled ? "bg-light shadow-sm" : "bg-transparent"
      }`}
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: isScrolled ? "100%" : "1200px",
          margin: "0 auto",
          transition: "max-width 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image src="/logo.jpg" alt="Logo" height={100} width={200} />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
            {menus.length > 0 ? (
              menus.map((menu) => (
                <li key={menu.id} className="nav-item">
                  <Link
                    href={getPagePath(menu.name)}
                    className={`nav-link active ${styles[`hover-effect`]}`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="nav-item">
                <span className="nav-link">Loading...</span>
              </li>
            )}

            {/* <li className="nav-item ">
              <Link href="/" className={`nav-link active ${styles[`hover-effect`]}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about"  className={`nav-link active ${styles[`hover-effect`]}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/m-services" className={`nav-link active ${styles[`hover-effect`]}`}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/medical-procedure" className={`nav-link active ${styles[`hover-effect`]}`}>
                Medical Procedure
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/fitness-criteria" className={`nav-link active ${styles[`hover-effect`]}`}>
                Fitness Criteria
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link active ${styles[`hover-effect`]}`}>
                Contact Us
              </Link>
            </li> */}
          </ul>
          <div>
            <Link href="/check-report">
              {pathname === "/" ? (
                <button className={`btn btn-outline-primary ms-3 `}>
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
}
