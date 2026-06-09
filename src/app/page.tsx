import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About").then(mod => mod.About));
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup").then(mod => mod.ExitIntentPopup));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <ExitIntentPopup />
    </>
  );
}
