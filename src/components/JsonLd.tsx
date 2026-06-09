import { projects } from "@/data/projects";

export function JsonLd() {
  const personSchema = {
    "@type": "Person",
    "@id": "https://kelly-portfolio-delta.vercel.app/#person",
    name: "Michael Briones",
    jobTitle: "Full-Stack AI Developer & Workflow Automation Specialist",
    url: "https://kelly-portfolio-delta.vercel.app",
    description: "Experienced Full-Stack Python & AI Developer specializing in Next.js, Django, Selenium, and AutoHotkey workflow automations that cut costs and scale operations.",
    sameAs: [
      "https://github.com/mchlbrns",
      "https://www.linkedin.com/in/michael-b-4568a2184/",
      "https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Artificial Intelligence Integration",
      "Workflow Automation",
      "Next.js",
      "Python",
      "Django",
      "AutoHotkey",
      "Selenium Scripting",
      "React",
      "TypeScript"
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://kelly-portfolio-delta.vercel.app/#website",
    url: "https://kelly-portfolio-delta.vercel.app",
    name: "Michael Briones | Full-Stack & AI Automation Developer Portfolio",
    publisher: {
      "@id": "https://kelly-portfolio-delta.vercel.app/#person"
    }
  };

  const creativeWorks = projects.map((project) => ({
    "@type": "CreativeWork",
    "@id": `https://kelly-portfolio-delta.vercel.app/#project-${project.slug}`,
    name: project.title,
    genre: project.category,
    description: project.problem + " " + project.solution,
    creator: {
      "@id": "https://kelly-portfolio-delta.vercel.app/#person"
    },
    programmingLanguage: project.tech,
    url: project.liveUrl || `https://kelly-portfolio-delta.vercel.app/projects/${project.slug}`
  }));

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      websiteSchema,
      ...creativeWorks
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
