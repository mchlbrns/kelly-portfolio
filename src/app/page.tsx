import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const About = dynamic(
  () => import("@/components/About").then(mod => mod.About),
  { loading: () => (
    <div className="max-w-7xl mx-auto px-4 py-24 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
      <div className="h-40 w-full bg-gray-100 dark:bg-gray-900 rounded-2xl"></div>
    </div>
  )}
);

const Services = dynamic(
  () => import("@/components/Services").then(mod => mod.Services),
  { loading: () => (
    <div className="max-w-7xl mx-auto px-4 py-24 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
        <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
        <div className="h-64 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
      </div>
    </div>
  )}
);

const Projects = dynamic(
  () => import("@/components/Projects").then(mod => mod.Projects),
  { loading: () => (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
      <div className="h-96 w-full bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
    </div>
  )}
);

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then(mod => mod.Testimonials),
  { loading: () => (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
        <div className="h-48 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
        <div className="h-48 bg-gray-100 dark:bg-gray-900 rounded-3xl"></div>
      </div>
    </div>
  )}
);
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
const Stats = dynamic(() => import("@/components/Stats").then(mod => mod.Stats));
const BackToTop = dynamic(() => import("@/components/BackToTop").then(mod => mod.BackToTop));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <ExitIntentPopup />
      <BackToTop />
    </>
  );
}
