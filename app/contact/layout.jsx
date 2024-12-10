import { dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  BASE_URL,
  GET_MENUS_ALL_NESTED,
  GET_IMAGE_BY_MENU_ID,
} from "@/constant/constant";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContactProvider from "./ContactProvider";
import { GooleMap } from "@/components/Map/map";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const ContactId = menusData?.find((menu) => menu?.name === "Contact Us")?.id; //menu Services
  console.log("contact menu", ContactId);

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${ContactId}`
  );
  const EmailContent = contentData?.menu_contents?.["Email"] || null;
  //console.log("Email content", EmailContent);
  const CallContent = contentData?.menu_contents?.["call"] || null;
  //console.log("Call content", CallContent);
  const AddressContent = contentData?.menu_contents?.["Address"] || null;
  //console.log("Address content", AddressContent);

  // const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${ContactId}`);
  // const serviceImage = imageData?.content_images?.find(
  //   (img) => img?.head === "About"
  // )?.image;
  //console.log("service image menu", serviceImage);

  const aboutData = {
    EmailContent,
    CallContent,
    AddressContent,
  };

  return (
    <ContactProvider aboutData={aboutData}>
            <HeroSection
        title="Contact Us"
      />
      <section>{children}</section>
      <GooleMap/>
    </ContactProvider>
  );
}
