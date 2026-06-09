"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("exit_popup_dismissed", "true");
  };

  const handleBooking = () => {
    setIsVisible(false);
    localStorage.setItem("exit_popup_dismissed", "true");
  };

  useEffect(() => {
    // Check if user has already dismissed the popup in this browser session
    const dismissed = localStorage.getItem("exit_popup_dismissed");
    if (dismissed) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // clientY < 20 indicates the cursor moved near the top of the viewport (intending to close tab / click address bar)
      if (e.clientY < 20 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (!isVisible) return;

    const previousActiveElement = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key === "Tab") {
        const modal = document.getElementById("exit-intent-modal");
        if (!modal) return;

        const focusables = modal.querySelectorAll<HTMLElement>(
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

    // Focus first interactive control (close button)
    const timer = setTimeout(() => {
      const modal = document.getElementById("exit-intent-modal");
      const first = modal?.querySelector<HTMLElement>('a[href], button');
      first?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      previousActiveElement?.focus();
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 dark:bg-black/70 backdrop-blur-sm">
          {/* Backdrop click close */}
          <div className="absolute inset-0" onClick={handleClose} />

          <m.div
            id="exit-intent-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
            aria-describedby="exit-popup-desc"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden bg-white/90 dark:bg-gray-950/90 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] shadow-2xl p-8 md:p-10 z-10 backdrop-blur-md"
          >
            {/* Background elements */}
            <div className="absolute top-[-20%] right-[-20%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[250px] h-[250px] bg-green-500/10 rounded-full blur-[80px] -z-10" />

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-100 dark:border-green-900/30 mb-4">
                Free Automation Audit
              </span>
              <h3 id="exit-popup-title" className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
                Losing hours to manual tasks?
              </h3>
              <p id="exit-popup-desc" className="text-gray-600 dark:text-gray-400 mt-3 text-base leading-relaxed">
                Let&apos;s audit your workflows. Schedule a free 15-minute consultation to identify exactly what can be automated using custom scripts, web apps, or AI integrations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://cal.com/michael-briones"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all text-center flex-1 shadow-sm hover:shadow-lg active:scale-[0.98]"
              >
                <Calendar size={18} />
                Book Free Audit
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBooking}
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-green-50 dark:hover:bg-green-950/10 text-green-600 dark:text-green-400 border border-green-600 dark:border-green-500/50 px-6 py-3.5 rounded-2xl font-bold transition-all text-center flex-1 active:scale-[0.98]"
              >
                Hire on Upwork
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={handleClose}
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors font-medium underline underline-offset-4"
              >
                No thanks, I want to keep doing things manually
              </button>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
