import { Github, Linkedin, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/mchlbrns",
    label: "Visit Michael's GitHub profile",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/michael-b-4568a2184/",
    label: "Visit Michael's LinkedIn profile",
    icon: Linkedin,
  },
  {
    href: "https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1",
    label: "Visit Michael's Upwork profile",
    icon: ExternalLink,
  },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                <Icon size={24} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Michael. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
