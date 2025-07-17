"use client";
// @Mui
import { Box } from "@mui/material";
// sections
import HeroBanner from "@/sections/HomePage/HeroBanner";
import AboutUsHook from "@/sections/HomePage/AboutUsHook";
import AboutUs from "@/sections/HomePage/AboutUs";
import Reviews from "@/components/Reviews";
import Hook from "@/sections/HomePage/Hook";
import Plans from "@/sections/HomePage/Plans";
import Services from "@/sections/HomePage/Services";

// ----------------------------------------------------------------

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUsHook />
      <AboutUs />
      <Services />
      <Reviews />
      <Plans />
      <Hook />
    </>
  );
}
