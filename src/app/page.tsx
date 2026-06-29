import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ));
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
