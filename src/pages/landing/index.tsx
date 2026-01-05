import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Contact } from "@/components/landing/Contact";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { useLenis } from "@/hooks/useLenis";

export const Landing = () => {
  useLenis(true);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};
