import { Github, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com/mchlbrns" target="_blank" rel="noopener noreferrer" aria-label="Visit Michael's GitHub profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <Github size={24} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/michael-b-4568a2184/" target="_blank" rel="noopener noreferrer" aria-label="Visit Michael's LinkedIn profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <Linkedin size={24} aria-hidden="true" />
            </a>
            <a href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1" target="_blank" rel="noopener noreferrer" aria-label="Visit Michael's Upwork profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <ExternalLink size={24} aria-hidden="true" />
            </a>
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
