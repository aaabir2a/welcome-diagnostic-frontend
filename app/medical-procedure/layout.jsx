import { dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  BASE_URL,
  GET_MENUS_ALL_NESTED,
  GET_IMAGE_BY_MENU_ID,
} from "@/constant/constant";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import MedicalProvider from "./MedicalProvider";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const MedicalId = menusData?.find((menu) => menu?.name === "Medical Procedure")?.id; //menu Services
  //console.log("medical menu", MedicalId);

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${MedicalId}`
  );
  const MedicalContent = contentData?.menu_contents?.["Process"] || null;
  //console.log("Services content menu", MedicalContent);
  

  const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${MedicalId}`);
  const MedicalImage = imageData?.content_images?.find(
    (img) => img?.head === "Process"
  )?.image;
  //console.log("service image menu", MedicalImage);

  const aboutData = {
    MedicalContent,
    MedicalImage: MedicalImage ? `${BASE_URL}${MedicalImage}` : null,
  };

  return (
    <MedicalProvider aboutData={aboutData}>
            <HeroSection
        title="Medical Procedure"
      />
      <section>{children}</section>
    </MedicalProvider>
  );
}
