"use client"
import localFont from "next/font/local";
import "./globals.css";
import Address from "./components/Address/Address";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero/Hero';
import { usePathname } from "next/navigation";
import mProcedure from './medical-procedure/page';




export default function RootLayout({ children }) {
  const pathname = usePathname();
  const customLayoutPages = ['/about', '/m-services', '/contact','/fitness-criteria','/medical-Procedure','/check-report'];
  const isCustomLayoutPage = customLayoutPages.includes(pathname);
  return (

  
    <html lang="en">
      <body>

        
      <Address />
      {!isCustomLayoutPage && <Navbar />} 
        <main>{children}</main>
        {!isCustomLayoutPage && <Footer />} 

        
      </body>
    </html>
  );
}
