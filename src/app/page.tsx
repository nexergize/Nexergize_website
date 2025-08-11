import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexergize Solution",
  description: "This is Home for Nexergize Solution",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <section id="about">
        <AboutSectionTwo />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-us">
        <AboutSectionOne />
        {/* Your Why Us content */}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
