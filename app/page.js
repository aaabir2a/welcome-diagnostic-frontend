import { contentFetcher, dataFetcher } from "@/utils/dataFetcher";
import {
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
  GET_SLIDERSETTINGS,
  BASE_URL,
} from "@/constant/constant";
import Wrapper from "@/components/Wrapper/Wrapper";
import { getSections } from "@/utils/sectionData";

export default async function Home() {
  // Fetch data
  const sliderIamge = (await dataFetcher(GET_SLIDERSETTINGS))?.homepage_sliders;
  
  

  const menusData = (await dataFetcher(GET_MENUS_ALL_NESTED))?.menus;

  const homeId = menusData?.find((menu) => menu?.name === "Home")?.id;
  // const aboutId = menusData?.find((menu) => menu?.name === "About")?.id; //menu about


//about content in Home
  let aboutContent = null,
    aboutImage = null,
    servicesContent = null,
    serviceImages = [],
    contactContent = null,
    contactImage = [];

  if (homeId) {
    const contentData = await contentFetcher(
      `${GET_CONTENTS_BY_MENU_ID}/${homeId}`
    );

    aboutContent = contentData?.menu_contents?.["About"] || null;
    servicesContent = contentData?.menu_contents?.["m-Services"] || null;
    contactContent = contentData?.menu_contents?.["contact"] || null;
    

    const imageData = await contentFetcher(`${GET_IMAGE_BY_MENU_ID}/${homeId}`);


    // Extract about image
    const aboutImageData = imageData?.content_images?.find(
      (img) => img?.head === "About"
    );
    aboutImage = aboutImageData?.image
      ? `${BASE_URL}${aboutImageData.image}`
      : null;

    serviceImages = imageData?.content_images
      .filter((img) => img?.head === "m-Services")
      .map((img) => `${BASE_URL}${img.image}`);

    contactImage = imageData?.content_images
      .filter((img) => img?.head === "contact")
      .map((img) => `${BASE_URL}${img.image}`);
  }

  const sectionData = {
    sliderIamge,
    about: { menusData, homeId, aboutContent, aboutImage },
    services: { servicesContent, serviceImages },
    contact: { contactContent, contactImage },
  };

  const sections = getSections(sectionData);

  return (
    <Wrapper>
      {sections.map(({ component: Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
    </Wrapper>
  );
}
