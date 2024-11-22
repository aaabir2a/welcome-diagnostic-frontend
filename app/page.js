import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/mServices/Services";
import ContactUs from "./components/ContactUs/ContactUs";


export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
    </main>
  );
}