import { projects } from "@/data/projects";

export function JsonLd() {
  const personSchema = {
    "@type": "Person",
    "@id": "https://michaelbriones-dev.vercel.app/#person",
    name: "Michael Briones",
    jobTitle: "Freelance Full-Stack & AI Automation Developer",
    url: "https://michaelbriones-dev.vercel.app",
    image: "https://michaelbriones-dev.vercel.app/avatar.png",
    description: "Freelance full-stack & AI automation developer Michael Briones builds custom Next.js web apps and workflow automations to help businesses cut costs and scale.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quezon City",
      addressRegion: "Metro Manila",
      addressCountry: "Philippines"
    },
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
      "TypeScript",
      "Node.js",
      "SaaS Development",
      "MVP Development"
    ]
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://michaelbriones-dev.vercel.app/#website",
    url: "https://michaelbriones-dev.vercel.app",
    name: "Michael Briones | Freelance Full-Stack & AI Automation Developer",
    publisher: {
      "@id": "https://michaelbriones-dev.vercel.app/#person"
    }
  };

  const creativeWorks = projects.map((project) => ({
    "@type": "CreativeWork",
    "@id": `https://michaelbriones-dev.vercel.app/#project-${project.slug}`,
    name: project.title,
    genre: project.category,
    description: project.problem + " " + project.solution,
    creator: {
      "@id": "https://michaelbriones-dev.vercel.app/#person"
    },
    programmingLanguage: project.tech,
    url: project.liveUrl || `https://michaelbriones-dev.vercel.app/projects/${project.slug}`
  }));

  const serviceSchema = {
    "@type": "ProfessionalService",
    "@id": "https://michaelbriones-dev.vercel.app/#service",
    name: "Michael Briones Development Services",
    url: "https://michaelbriones-dev.vercel.app",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=630",
    description: "Specialized development services including AI automation, custom web applications, and workflow optimization to reduce operational overhead.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quezon City",
      addressRegion: "Metro Manila",
      addressCountry: "Philippines"
    },
    telephone: "+639000000000", // Required for ProfessionalService
    priceRange: "$$ - Competitive Pricing for Custom Automation & Web Apps",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Applications"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "MVP Development"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why hire a specialist over a generic developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A specialist like Michael Briones focuses on solving business challenges, eliminating repetitive work, and building high-performance systems with clear outcomes and ROI, rather than just writing code."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I leverage Next.js, OpenAI API, LangChain, Python, and custom desktop scripting with Selenium and AutoHotkey to build robust AI-powered workflows."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide long-term support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I provide dedicated post-launch maintenance, troubleshooting support, and system monitoring to ensure smooth operations as your business scales."
        }
      }
    ]
  };

  const reviews = [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sarah Jenkins" },
      "reviewBody": "Michael transformed our outdated system into a modern, lightning-fast application. The AI integration alone saved us 20 hours a week.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2024-05-15",
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "Michael Briones Development Services"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michael Chang" },
      "reviewBody": "Working with Michael was a game-changer. The communication was excellent, and the final product exceeded all our expectations.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2024-03-10",
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "Michael Briones Development Services"
      }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Orlando N." },
      "reviewBody": "Working with Michael was great!! He is very knowledgeable about AutoHotKey and was able to deliver exactly what I needed. He is very professional and respectful.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "datePublished": "2024-01-22",
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "Michael Briones Development Services"
      }
    }
  ];

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      websiteSchema,
      serviceSchema,
      faqSchema,
      ...reviews,
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
