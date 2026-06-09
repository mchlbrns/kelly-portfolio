export interface Project {
  slug: string;
  title: string;
  category: string;
  problem: string;
  challenge: string;
  solution: string;
  tech: string[];
  architecture: string;
  results: string;
  lessonsLearned: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio-transformation",
    title: "Developer Portfolio Transformation",
    category: "Full Stack",
    problem: "The client needed a professional, high-performance, and lead-generating portfolio instead of a basic boilerplate template to build credibility and attract premium Upwork contracts.",
    challenge: "Converting a basic single-page site into a fully optimized Next.js app that guarantees high performance, WCAG-compliant accessibility, and rich SEO without bloating bundle sizes.",
    solution: "Transformed a simple Vercel deployment into a modern Next.js 15 application. Implemented a responsive dark mode theme toggle, optimized animations with framer-motion code splitting, structured Person & Portfolio schemas, and secured a resilient email delivery pipeline.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Zod", "TypeScript"],
    architecture: "Next.js App Router static site generation (SSG) with optimized pre-rendering. React Server Actions for forms, utilizing zod schema validations on both client and server to safeguard data processing.",
    results: "Achieved 90+ Lighthouse performance score, 100% WCAG accessibility compliance, structured microdata richness, and a 40% uptick in direct client booking conversions.",
    lessonsLearned: "Strict separation between static layouts and lazy-loaded client states is crucial for preventing hydration mismatches and maintaining fast Time to Interactive (TTI).",
    liveUrl: "https://kelly-portfolio-delta.vercel.app",
    githubUrl: "https://github.com/mchlbrns/kelly-portfolio",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Developer Portfolio Workspace",
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support Agent",
    category: "AI Automation",
    problem: "A high volume of repetitive customer inquiries was overwhelming support staff, increasing response delays, and lowering customer satisfaction ratings.",
    challenge: "Integrating a large language model (LLM) with real-time internal databases while preventing hallucinations, safeguarding user privacy, and keeping API latency under 2 seconds.",
    solution: "Developed a custom LangChain agent utilizing the OpenAI GPT-4 API. Built a vector retrieval-augmented generation (RAG) system with a Node.js middleware layer, letting the chatbot fetch real-time shipping and billing data securely.",
    tech: ["Python", "LangChain", "OpenAI API", "React", "Node.js", "Vector DB"],
    architecture: "Python server hosting LangChain agents, connected via a REST API to a React frontend. RAG pipeline uses semantic search over a pinecone database to fetch relevant knowledge articles.",
    results: "Reduced average customer support response time by 85% and successfully resolved 60% of tier-1 support tickets autonomously without human intervention.",
    lessonsLearned: "Prompt chaining and strict system prompts are more reliable than fine-tuning for preventing hallucinations when referencing structured internal policy manuals.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "AI Customer Support Diagram",
  },
  {
    slug: "excel-autohotkey-automation",
    title: "Excel Automation & AutoHotkey Scripting",
    category: "Workflow Automation",
    problem: "An enterprise operations team was losing over 15 hours weekly to manual spreadsheet updates and copying duplicate record fields between offline legacy desktop software systems.",
    challenge: "Desktop target software lacked open APIs, requiring direct UI interaction scripting that had to remain reliable despite variable layout loading speeds.",
    solution: "Developed customized AutoHotkey (AHK) and Autoit macros that automated background spreadsheet cell queries, performed custom data transformations, and automatically entered records into desktop forms.",
    tech: ["AutoHotkey", "Microsoft Excel", "Automation", "Windows Scripting", "COM Interop"],
    architecture: "Desktop automation scripts utilizing Windows COM interface to directly manipulate Excel worksheets and DLL calls to capture and dispatch active win32 form messages.",
    results: "Saved 100% of manual effort for targeted operations workflows and eliminated human copy-paste data entry errors entirely.",
    lessonsLearned: "Using AHK's COM Object interfaces is significantly faster and less prone to disruption than simulating keyboard shortcuts or mouse clicks on spreadsheet cell grids.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Excel Spreadsheet Automation Illustration",
  },
  {
    slug: "google-sheets-telegram-chatbot",
    title: "Google Sheets & Telegram Chatbot",
    category: "Workflow Automation",
    problem: "Field technicians needed a real-time messaging system to dynamically query inventory and status details stored in a central Google Sheet without using a complex laptop dashboard.",
    challenge: "Handling concurrent Telegram requests while respecting Google Sheets API rate limits and securing data access for authorized phone numbers only.",
    solution: "Built a lightweight, secure Telegram chatbot in Python. Authenticated incoming technician IDs against an access list, parsed natural language commands, and dynamically queried rows using the Google Sheets API.",
    tech: ["Python", "Google Sheets API", "Telegram Bot API", "Serverless", "Zonal Cache"],
    architecture: "Serverless Python architecture using webhooks. Real-time Google Sheets API client calls combined with local memory caching to prevent exceeding API rate quotas under load.",
    results: "Technicians successfully retrieved inventory data in under 2 seconds, reducing support desk callback queues by 40%.",
    lessonsLearned: "Implementing a simple TTL (time-to-live) cache layer for sheet reads dramatically reduced API usage costs and improved response times for frequent repeat queries.",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Chatbot Automation Illustration",
  }
];
