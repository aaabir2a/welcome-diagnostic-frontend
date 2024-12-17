import localFont from "next/font/local";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Address from "@/components/Address/Address";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import { dataFetcher } from "@/utils/dataFetcher";
import { GET_MENUS_ALL_NESTED, GET_SITESETTINGS } from "@/constant/constant";

export const revalidate = 20;
export default async function RootLayout({ children }) {
  

  const data = await dataFetcher(GET_MENUS_ALL_NESTED);
  const menusData = data?.menus;

  const siteSetting = (await dataFetcher(GET_SITESETTINGS))?.general_settings;
  const { email, phone, logo, address } = siteSetting?.[0] || {}; // Access the first item

  return (
    <html lang="en">
      <body>
        <Address />
        <Navbar menusData={menusData} />
        <main>{children}</main>
        <ScrollUp />
        <Footer email={email} phone={phone} logo={logo} address={address} />
      </body>
    </html>
  );
}
