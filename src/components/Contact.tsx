"use client";

import { useActionState } from "react";
import { m } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: "idle",
  });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build Something?
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let&apos;s discuss how we can transform your ideas into reality. Fill out the form below or book a discovery call.
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-950 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          {state.status === "success" ? (
            <div className="text-center py-12" role="alert">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {state.message}
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-invalid={!!state.errors?.name}
                    aria-describedby={state.errors?.name ? "name-error" : undefined}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {state.errors?.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-invalid={!!state.errors?.email}
                    aria-describedby={state.errors?.email ? "email-error" : undefined}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {state.errors?.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  aria-haspopup="listbox"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option value="Full-Stack Development">Full-Stack Development</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="MVP / Prototyping">MVP / Prototyping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  aria-invalid={!!state.errors?.message}
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project goals, timeline, and budget..."
                />
                {state.errors?.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              {state.status === "error" && !state.errors && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md text-sm" role="alert">
                  {state.message || "Something went wrong. Please try again later."}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                aria-disabled={isPending}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </m.div>
      </div>
    </section>
  );
}
