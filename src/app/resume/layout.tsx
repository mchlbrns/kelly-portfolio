import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael Briones Resume | Full-Stack & AI Automation Developer",
  description: "Explore the professional experience, technical skills, and key projects of Michael Briones, a freelance Full-Stack Developer and AI Automation Developer.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Michael Briones Resume | Full-Stack & AI Automation Developer",
    description: "Explore the professional experience, technical skills, and key projects of Michael Briones, a freelance Full-Stack Developer and AI Automation Developer.",
    url: "https://kelly-portfolio-delta.vercel.app/resume",
    type: "profile",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Michael Briones Resume | Full-Stack & AI Automation Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Briones Resume | Full-Stack & AI Automation Developer",
    description: "Explore the professional experience, technical skills, and key projects of Michael Briones, a freelance Full-Stack Developer and AI Automation Developer.",
    images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=630"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
