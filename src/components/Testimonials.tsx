"use client";

import { m } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kelly transformed our outdated system into a modern, lightning-fast application. The AI integration alone saved us 20 hours a week.",
    author: "Sarah Jenkins",
    role: "Operations Director, TechFlow",
  },
  {
    quote: "Working with Kelly was a game-changer. The communication was excellent, and the final product exceeded all our expectations.",
    author: "Michael Chang",
    role: "Founder, StartupX",
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Clients Say
          </m.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl relative border border-gray-100 dark:border-gray-800"
            >
              <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-12 h-12" />
              <blockquote className="relative z-10">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <cite className="not-italic">
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </cite>
              </blockquote>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
