import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com/kelly" aria-label="Visit Kelly's GitHub profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <Github size={24} aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/kelly" aria-label="Visit Kelly's LinkedIn profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <Linkedin size={24} aria-hidden="true" />
            </a>
            <a href="https://twitter.com/kelly" aria-label="Visit Kelly's Twitter profile" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <Twitter size={24} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Kelly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
