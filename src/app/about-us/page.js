"use client";
// sections
import HeroVideo from "@/components/HeroVideo";
import CoreValues from "@/sections/AboutUs/CoreValues";
import FAQ from "@/sections/AboutUs/FAQ";
import OurStory from "@/sections/AboutUs/OurStory";
//
import heroCover from "@/assets/about-us-page/hero-cover.jpg";
import AboutUsVideoPopUp from "@/components/AboutUsVideoPopUp";

// ------------------------------------------------------------------

function AboutUsPage() {
  return (
    <>
      <HeroVideo coverImage={heroCover} page="aboutUs" />
      <OurStory />
      <CoreValues />
      <FAQ />
      <AboutUsVideoPopUp />
    </>
  );
}

export default AboutUsPage;
