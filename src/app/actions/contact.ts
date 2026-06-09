"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      status: "error",
      message: "Please fix the errors in the form.",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send an email or save to a database.
  // For the portfolio, we will simulate success.
  console.log("Form submitted successfully:", validatedData.data);

  return {
    status: "success",
    message: "Thank you for reaching out. I'll get back to you within 24 hours.",
  };
}
