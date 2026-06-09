"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["services", "work", "contact", "about"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation & focus trapping for accessibility
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const drawer = document.getElementById("mobile-menu-drawer");
        if (!drawer) return;

        const focusables = drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const activeEl = document.activeElement as HTMLElement;
      
      // Delay slightly to allow element to render and focus
      const timer = setTimeout(() => {
        const drawer = document.getElementById("mobile-menu-drawer");
        const first = drawer?.querySelector<HTMLElement>('a[href], button');
        first?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        activeEl?.focus();
      };
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Work", href: "/#work", id: "work" },
    { name: "Resume", href: "/resume", id: "resume" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Michael
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`transition-colors text-sm font-medium ${
                  activeSection === link.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span className="sr-only">
                  {resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                </span>
              </button>
            )}

            <a
              href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 dark:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-950/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Upwork Profile
            </a>

            <Link
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span className="sr-only">
                  {resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div id="mobile-menu-drawer" className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-center rounded-md text-base font-medium border border-green-600 dark:border-green-500/50 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/20"
              >
                Upwork Profile
              </a>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 mt-2 text-center rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
