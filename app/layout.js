import localFont from "next/font/local";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Address from "@/components/Address/Address";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import { dataFetcher } from "@/utils/dataFetcher";
import { GET_MENUS_ALL_NESTED } from "@/constant/constant";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";



export default async function RootLayout({ children }) {
  const data = await dataFetcher(GET_MENUS_ALL_NESTED);
  const menusData = data?.menus;
  
  return (
    <html lang="en">
      <body>
        <Address />
        <Navbar menusData={menusData} />
        <main>{children}</main>
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}
