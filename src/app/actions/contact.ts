"use server";

import { contactSchema } from "./contactSchema";

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

  // Dispatch notification email via Resend if API key is present
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.CONTACT_EMAIL_TO || "michaelbriones113@gmail.com";

  if (resendApiKey) {
    try {
      const { name, email, projectType, message } = validatedData.data;
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: emailTo,
          subject: `New Lead from ${name}: ${projectType || "Project Inquiry"}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfcfc;">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-bottom: 20px;">New Portfolio Inquiry</h2>
              <p style="margin-bottom: 10px;">You have received a new message from your developer portfolio contact form.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #f0f0f0;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Project Type:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><span style="background-color: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 6px; font-size: 0.9em; font-weight: 600;">${projectType || "Not Specified"}</span></td>
                </tr>
              </table>
              
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 20px;">
                <strong style="display: block; margin-bottom: 8px; color: #4b5563;">Message Details:</strong>
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="font-size: 0.8em; color: #6b7280; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px; margin-top: 25px;">
                Sent automatically from your portfolio site.
              </p>
            </div>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Resend API call failed inside Server Action:", errText);
      } else {
        console.log("Notification email successfully sent via Server Action & Resend API.");
      }
    } catch (err) {
      console.error("Error sending email notification in Server Action:", err);
    }
  }

  return {
    status: "success",
    message: "Thank you for reaching out. I've received your message and will get back to you within 24 hours.",
  };
}
