import localFont from "next/font/local";
import "./globals.scss";
import Address from "./components/Address/Address";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Address />
        <Navbar />
        <main>{children}</main>
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}
