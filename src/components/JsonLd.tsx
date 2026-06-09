export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelly",
    jobTitle: "Full-Stack & AI Automation Developer",
    url: "https://kelly-portfolio-delta.vercel.app",
    sameAs: [
      "https://github.com/kelly",
      "https://linkedin.com/in/kelly",
      "https://twitter.com/kelly"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
