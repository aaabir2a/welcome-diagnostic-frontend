import { dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  BASE_URL,
  GET_MENUS_ALL_NESTED,
  GET_IMAGE_BY_MENU_ID,
} from "@/constant/constant";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceProvider from "./ServiceProvider";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const ServicesId = menusData?.find((menu) => menu?.name === "Services")?.id; //menu Services
  //console.log("Services menu", ServicesId);

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${ServicesId}`
  );
  const ServicesContent = contentData?.menu_contents?.["Service"] || null;
  //console.log("Services content menu", ServicesContent);
  const ServicesAboutContent = contentData?.menu_contents?.["About"] || null;
  //console.log("Services About content menu", ServicesAboutContent);

  const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${ServicesId}`);
  const serviceImage = imageData?.content_images?.find(
    (img) => img?.head === "About"
  )?.image;
  //console.log("service image menu", serviceImage);

  const aboutData = {
    ServicesContent,
    ServicesAboutContent,
    serviceImage: serviceImage ? `${BASE_URL}${serviceImage}` : null,
  };

  return (
    <ServiceProvider aboutData={aboutData}>
            <HeroSection
        title="Our Services"
      />
      <section>{children}</section>
    </ServiceProvider>
  );
}
