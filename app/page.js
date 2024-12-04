import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/mServices/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import {
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
  GET_SLIDERSETTINGS,
} from "@/constant/constant";
import { contentFetcher, dataFetcher } from "@/utils/dataFetcher";

export default async function Home({ props }) {
  // Fetch slider data
  const data = await dataFetcher(GET_SLIDERSETTINGS);
  const sliderIamge = data?.homepage_sliders;

  // Fetch menus
  const menu = await dataFetcher(GET_MENUS_ALL_NESTED);
  const menusData = menu?.menus;

  // Find the Home menu ID
  const homeId = menusData.find((menu) => menu?.name === "Home").id;

  // Fetch content based on Home ID
  let aboutContent = null;
  let aboutImage =null;


  if (homeId) {
    const contentData = await contentFetcher(
      `${GET_CONTENTS_BY_MENU_ID}/${homeId}`
    );
    aboutContent = contentData?.menu_contents?.["About"] || null;

    const imageData = await contentFetcher(`${GET_IMAGE_BY_MENU_ID}/${homeId}`);
    console.log("Full imageData object:", imageData);

    const aboutImageData = imageData?.content_images?.find(
      (img) => img?.head === "About"
    );
    aboutImage = aboutImageData?.image;

     console.log("Extracted About Image:", aboutImage);
  }

  return (
    <main>
      <Hero sliderIamge={sliderIamge} />
      <AboutUs
        menusData={menusData}
        homeId={homeId}
        aboutContent={aboutContent}
        aboutImage={aboutImage}
      />
      <Services />
      <ContactUs />
    </main>
  );
}
