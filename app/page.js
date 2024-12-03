import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/mServices/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import { GET_SLIDERSETTINGS } from "@/constant/constant";
import { dataFetcher } from "@/utils/dataFetcher";



export default async function Home({props}) {
  const data = await dataFetcher(GET_SLIDERSETTINGS);
  const sliderIamge = data?.homepage_sliders;
  return (
    <main>
     
      <Hero sliderIamge={sliderIamge}/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
    </main>
  );
}