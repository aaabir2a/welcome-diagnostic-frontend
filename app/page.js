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
  BASE_URL,
} from "@/constant/constant";
import { contentFetcher, dataFetcher } from "@/utils/dataFetcher";
import contact from "./contact/page";

export default async function Home({ props }) {
  // Fetch slider data
  const data = await dataFetcher(GET_SLIDERSETTINGS);
  const sliderIamge = data?.homepage_sliders;

  // Fetch menus
  const menu = await dataFetcher(GET_MENUS_ALL_NESTED);
  const menusData = menu?.menus;

  
  const homeId = menusData.find((menu) => menu?.name === "Home").id;

  
  let aboutContent = null;
  let aboutImage = null;
  let servicesContent = null;
  let serviceImages = [];
  let contactContent = null;
  let contactImage = [];

  if (homeId) {
    // Fetch content data
    const contentData = await contentFetcher(
      `${GET_CONTENTS_BY_MENU_ID}/${homeId}`
    );
    aboutContent = contentData?.menu_contents?.["About"] || null;
    servicesContent = contentData?.menu_contents?.["m-Services"] || null;
    contactContent = contentData?.menu_contents?.["contact"] || null;

    // Fetch image data
    const imageData = await contentFetcher(`${GET_IMAGE_BY_MENU_ID}/${homeId}`);
    // console.log("Full imageData object:", imageData);

    // Extract about image
    const aboutImageData = imageData?.content_images?.find(
      (img) => img?.head === "About"
    );
    aboutImage = aboutImageData?.image
      ? `${BASE_URL}${aboutImageData.image}`
      : null;

    // Extract all images related to "m-Services"
    serviceImages = imageData?.content_images
      .filter((img) => img?.head === "m-Services")
      .map((img) => `${BASE_URL}${img.image}`); // Map full image URLs

    // Extract all images related to "m-Services"
    serviceImages = imageData?.content_images
      .filter((img) => img?.head === "m-Services")
      .map((img) => `${BASE_URL}${img.image}`); // Map full image URLs

    // Extract all images related to "contact"
    contactImage = imageData?.content_images
      .filter((img) => img?.head === "contact")
      .map((img) => `${BASE_URL}${img.image}`); // Map full image URLs
  }

  console.log("contact Images:", contactImage);

  return (
    <main>
      <Hero sliderIamge={sliderIamge} />
      <AboutUs
        menusData={menusData}
        homeId={homeId}
        aboutContent={aboutContent}
        aboutImage={aboutImage}
      />
      <Services
        servicesContent={servicesContent}
        serviceImages={serviceImages} 
      />
      <ContactUs
      contactContent={contactContent}
      contactImage={contactImage}
      />
    </main>
  );
}
