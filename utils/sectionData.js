import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/mServices/Services";
import ContactUs from "@/components/ContactUs/ContactUs";

export const getSections = (data) => [
  { component: Hero, props: { sliderIamge: data.sliderIamge } },
  { component: AboutUs, props: { ...data.about } },
  { component: Services, props: { ...data.services } },
  { component: ContactUs, props: { ...data.contact } },
];
