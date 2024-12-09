import { dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  BASE_URL,
  GET_MENUS_ALL_NESTED,
  GET_IMAGE_BY_MENU_ID,
} from "@/constant/constant";
import React from "react";
import AboutProvider from "./aboutprovider";
import HeroSection from "@/components/HeroSection/HeroSection";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const aboutId = menusData?.find((menu) => menu?.name === "About")?.id; //menu about

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${aboutId}`
  );
  const aboutContent = contentData?.menu_contents?.["About"] || null;
 

  const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${aboutId}`);
  const aboutImage = imageData?.content_images?.find(
    (img) => img?.head === "About"
  )?.image;

  const aboutData = {
    aboutContent,
    aboutImage: aboutImage ? `${BASE_URL}${aboutImage}` : null,
  };

  return (
    <AboutProvider aboutData={aboutData}>
            <HeroSection
        title="About Us"
      />
      <section>{children}</section>
    </AboutProvider>
  );
}
