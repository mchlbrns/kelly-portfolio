export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael",
    jobTitle: "Full-Stack & AI Automation Developer",
    url: "https://kelly-portfolio-delta.vercel.app",
    sameAs: [
      "https://github.com/mchlbrns",
      "https://www.linkedin.com/in/michael-b-4568a2184/",
      "https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
