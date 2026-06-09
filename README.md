# Kelly - Full-Stack & AI Automation Developer Portfolio

A modern, high-performance developer portfolio built to function as a client-acquisition platform. It showcases services, projects, and allows prospective clients to get in touch seamlessly.

## Features

- **Next.js 14 App Router:** Leveraging the latest features of Next.js for optimal performance and SEO.
- **Tailwind CSS & Framer Motion:** Beautiful styling and smooth, subtle micro-interactions.
- **Dark/Light Mode:** Full support for system-preference or user-toggled themes.
- **Responsive Design:** Mobile-first approach ensuring a great experience on any device.
- **Contact API Route:** Built-in endpoint (`/api/contact`) ready to be connected to Webhooks, Google Sheets, or email providers.
- **Calendly Integration:** Easily connect your scheduling link via environment variables.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed.

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# URL for your Calendly booking page (used in the Hero section CTA)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Webhook URL to receive contact form submissions (e.g., Make, Zapier, or a custom endpoint)
CONTACT_WEBHOOK_URL=https://hook.your-service.com/xxxx
```

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

- **Theme & Colors:** Adjust primary colors inside `tailwind.config.ts` (if added) or globally within `src/app/globals.css`.
- **Content:** Update the `projects` array in `src/components/Projects.tsx` to showcase your actual work.
- **Services:** Modify the `services` list in `src/components/Services.tsx` to reflect your specific offerings.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Simply import your GitHub repository to Vercel and it will automatically build and deploy. Be sure to add your Environment Variables in the Vercel dashboard.

## Lighthouse Performance

This portfolio is optimized to achieve a Lighthouse score of ≥ 90 across all categories. Ensure images are optimized (using `next/image` where applicable) when replacing placeholder content to maintain high scores.
