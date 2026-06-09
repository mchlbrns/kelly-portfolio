"use client";

import { useActionState, useState, useEffect } from "react";
import { m } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { submitContactForm, contactSchema } from "@/app/actions/contact";

export function ContactSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-pulse">
      <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-4"></div>
      <div className="h-4 w-96 bg-gray-100 dark:bg-gray-900 rounded mx-auto mb-12"></div>
      <div className="bg-white dark:bg-gray-950 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
            <div className="h-12 w-full bg-gray-100 dark:bg-gray-900 rounded-lg"></div>
          </div>
          <div>
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
            <div className="h-12 w-full bg-gray-100 dark:bg-gray-900 rounded-lg"></div>
          </div>
        </div>
        <div className="mb-6">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          <div className="h-12 w-full bg-gray-100 dark:bg-gray-900 rounded-lg"></div>
        </div>
        <div className="mb-6">
          <div className="h-4 w-28 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
          <div className="h-32 w-full bg-gray-100 dark:bg-gray-900 rounded-lg"></div>
        </div>
        <div className="h-14 w-full bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      </div>
    </div>
  );
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    status: "idle",
  });

  const [errors, setErrors] = useState<Record<string, string[]> | undefined>(undefined);

  useEffect(() => {
    if (state.errors) {
      setErrors(state.errors);
    }
  }, [state.errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    };

    const validated = contactSchema.safeParse(rawData);
    if (!validated.success) {
      setErrors(validated.error.flatten().fieldErrors);
      return;
    }

    setErrors(undefined);
    formAction(formData);
  };

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
            Contact Me: Hire a Full-Stack Developer & MVP Developer
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
          className="bg-white dark:bg-gray-950 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Global Form Submission Live Announcement */}
          <div className="sr-only" aria-live="polite">
            {isPending && "Submitting form, please wait..."}
            {state.status === "success" && "Form submitted successfully. " + state.message}
            {state.status === "error" && "Form submission failed. " + (state.message || "Please fix errors.")}
          </div>

          {state.status === "success" ? (
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12" 
              role="alert"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-slow" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                {state.message}
              </p>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <fieldset disabled={isPending} className="space-y-6">
                <legend className="sr-only">Contact Form Details</legend>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors?.name}
                      aria-describedby={errors?.name ? "name-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                      placeholder="John Doe"
                    />
                    {errors?.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert" aria-live="assertive">
                        {errors.name[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors?.email}
                      aria-describedby={errors?.email ? "email-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                    {errors?.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert" aria-live="assertive">
                        {errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 appearance-none"
                    >
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="MVP / Prototyping">MVP / Prototyping</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Project Details <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    rows={4}
                    aria-invalid={!!errors?.message}
                    aria-describedby={errors?.message ? "message-error" : undefined}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
                    placeholder="Tell me about your project goals, timeline, and budget..."
                  />
                  {errors?.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert" aria-live="assertive">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                {state.status === "error" && !errors && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 rounded-lg text-sm" role="alert" aria-live="assertive">
                    {state.message || "Something went wrong. Please try again later."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  aria-disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none text-white rounded-lg font-semibold text-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} aria-hidden="true" />
                    </>
                  )}
                </button>
              </fieldset>
            </form>
          )}
        </m.div>
      </div>
    </section>
  );
}
