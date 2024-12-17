import { dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  BASE_URL,
  GET_MENUS_ALL_NESTED,
  GET_IMAGE_BY_MENU_ID,
} from "@/constant/constant";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import FitnessProvider from "./FitnessProvider";
import { GooleMap } from "@/components/Map/map";



export default async function AboutLayout({ children }) {
  
    
  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;
  const FitnessId = menusData?.find((menu) => menu?.name === "Fitness Criteria")?.id; //menu Services
  console.log("Fitness menu", FitnessId);

  const contentData = await dataFetcher(
    `${GET_CONTENTS_BY_MENU_ID}/${FitnessId}`
  );
  const FitnessContent = contentData?.menu_contents?.["Head"] || null;
  // console.log("Fitness content menu", FitnessContent);
  const FitnessAboutContent = contentData?.menu_contents?.["About"] || null;
  // console.log("Fitness About content menu", FitnessAboutContent);

  const imageData = await dataFetcher(`${GET_IMAGE_BY_MENU_ID}/${FitnessId}`);
  const FitnessImage = imageData?.content_images?.find(
    (img) => img?.head === "About"
  )?.image;
  // console.log("Fitness image menu", FitnessImage);

  const aboutData = {
    FitnessContent,
    FitnessAboutContent,
    FitnessImage: FitnessImage ? `${BASE_URL}${FitnessImage}` : null,
  };

  return (
    <FitnessProvider aboutData={aboutData}>
            <HeroSection
        title="Medical Fitness Criteria"
      />
     
      <section>{children}</section>
      <GooleMap/>
    </FitnessProvider>
  );
}
