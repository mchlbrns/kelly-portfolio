import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About").then(mod => mod.About));
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const Contact = dynamic(
  () => import("@/components/Contact").then(mod => mod.Contact),
  { loading: () => (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-pulse">
      <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-4"></div>
      <div className="h-4 w-96 bg-gray-100 dark:bg-gray-900 rounded mx-auto mb-12"></div>
      <div className="h-96 w-full bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
    </div>
  )}
);
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
