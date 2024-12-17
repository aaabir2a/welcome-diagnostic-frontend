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
import { GooleMap } from "@/components/Map/map";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const ServicesId = menusData?.find((menu) => menu?.name === "Services")?.id; //menu Services
  //console.log("Services menu", ServicesId);

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${ServicesId}`
  );
  const ServicesContent1 = contentData?.menu_contents?.["Service1"] || null;
  const ServicesAboutContent1 = contentData?.menu_contents?.["About1"] || null;

  const ServicesContent2 = contentData?.menu_contents?.["Service2"] || null;
  const ServicesAboutContent2 = contentData?.menu_contents?.["About2"] || null;

  const ServicesContent3 = contentData?.menu_contents?.["Service3"] || null;
  const ServicesAboutContent3 = contentData?.menu_contents?.["About3"] || null;


  const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${ServicesId}`);
  const serviceImage1 = imageData?.content_images?.find(
    (img) => img?.head === "About1"
  )?.image;
  const serviceImage2 = imageData?.content_images?.find(
    (img) => img?.head === "About2"
  )?.image;
  const serviceImage3 = imageData?.content_images?.find(
    (img) => img?.head === "About3"
  )?.image;
  //console.log("service image menu", serviceImage);

  const aboutData = {
    ServicesContent1,
    ServicesAboutContent1,
    ServicesContent2,
    ServicesAboutContent2,
    ServicesContent3,
    ServicesAboutContent3,
    serviceImage1: serviceImage1 ? `${BASE_URL}${serviceImage1}` : null,
    serviceImage2: serviceImage2 ? `${BASE_URL}${serviceImage2}` : null,
    serviceImage3: serviceImage3 ? `${BASE_URL}${serviceImage3}` : null,
  };

  return (
    <ServiceProvider aboutData={aboutData}>
            <HeroSection
        title="Our Services"
      />
      <section>{children}</section>
      <GooleMap/>
    </ServiceProvider>
  );
}
