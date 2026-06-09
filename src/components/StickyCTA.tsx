"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Calendar } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/michael-briones";

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when user scrolls past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
        >
          {/* Desktop Version: Full Button */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-98 border border-blue-500/30"
          >
            <Calendar size={18} />
            Book Free Audit
          </a>

          {/* Mobile Version: Floating Pill Button */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/30 border border-blue-500/20 active:scale-95"
            aria-label="Book Free Consultation"
          >
            <Calendar size={22} />
          </a>
        </m.div>
      )}
    </AnimatePresence>
  );
}
