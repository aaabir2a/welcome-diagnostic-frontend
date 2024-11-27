import localFont from "next/font/local";
import "./globals.scss";
import Address from "./components/Address/Address";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import ScrollUp from "./components/ScrollUp/ScrollUp";
<head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
</head>
import 'bootstrap-icons/font/bootstrap-icons.css';


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
