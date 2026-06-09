import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
