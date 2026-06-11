import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address').max(255, 'Email is too long'),
  projectType: z.string().max(100, 'Project type is too long').optional(),
  message: z.string().min(1, 'Message is required').max(5000, 'Message is too long'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate inputs using Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, projectType, message } = result.data;

    // Dispath notification email via Resend if API key is present
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL_TO || 'michaelbriones113@gmail.com';

    if (resendApiKey) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: emailTo,
            subject: `New Lead from ${name}: ${projectType || 'Project Inquiry'}`,
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
                    <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><span style="background-color: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 6px; font-size: 0.9em; font-weight: 600;">${projectType || 'Not Specified'}</span></td>
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
          console.error('Resend API call failed:', errText);
        } else {
          console.log('Notification email successfully sent via Resend API.');
        }
      } catch (err) {
        console.error('Error sending email notification:', err);
      }
    }

    // Webhook implementation (if active)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType, message, source: 'Portfolio Contact Form' }),
      });
    } else if (!resendApiKey) {
      console.log('Form submission received:', { name, email, projectType, message });
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
