import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
