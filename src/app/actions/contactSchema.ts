import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(254, "Email is too long"),
  projectType: z.string().max(100, "Project type is too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
});
