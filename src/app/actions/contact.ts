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

  // =========================================================================
  // PRODUCTION NOTE:
  // Currently, this form only logs to the server console (viewable in Vercel logs).
  // To receive real email notifications, you can use a service like Resend.
  // 1. Run: pnpm add resend
  // 2. Uncomment the code below and add your RESEND_API_KEY to .env
  // =========================================================================
  
  console.log("Form submitted successfully:", validatedData.data);

  /*
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL_TO || 'your-email@example.com',
    subject: `New Project Inquiry from ${validatedData.data.name}`,
    text: `
      Name: ${validatedData.data.name}
      Email: ${validatedData.data.email}
      Project Type: ${validatedData.data.projectType}
      Message: ${validatedData.data.message}
    `,
  });
  */

  return {
    status: "success",
    message: "Thank you for reaching out. I've received your message and will get back to you within 24 hours.",
  };
}
