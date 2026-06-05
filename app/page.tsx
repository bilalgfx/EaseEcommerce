import Hero from "@/components/sections/Hero";
import MarketplaceStory from "@/components/sections/MarketplaceStory";
import AboutNajam from "@/components/sections/AboutNajam";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketplaceStory />
      <AboutNajam />
      <Services />
      <Portfolio />
      <Testimonials />
      <WhyChoose />
      <ContactCTA />
    </>
  );
}
