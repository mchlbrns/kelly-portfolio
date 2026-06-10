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
  clientValue: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio-transformation",
    title: "Freelance Portfolio Conversion Engine",
    category: "Full Stack",
    problem: "The client needed a professional, high-performance, and lead-generating platform instead of a basic 'developer showcase' to build credibility and attract premium contract projects.",
    challenge: "Converting a basic static site into a fully optimized Next.js 15 application that guarantees high performance, WCAG accessibility, and rich SEO without bloating bundle sizes.",
    solution: "Transformed the static portfolio into a premium Next.js 15 application with server-side optimizations, interactive schema structures, optimized media files, and conversion psychology funnels.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Zod", "TypeScript"],
    architecture: "Next.js App Router static site generation (SSG) with optimized pre-rendering. React Server Actions for forms, utilizing zod schema validations on both client and server to safeguard data processing.",
    results: "Achieved a 98+ Lighthouse performance score, 100% WCAG accessibility compliance, and a 40% increase in direct client consultation inquiries.",
    clientValue: "Replaced tech jargon with high-impact business outcomes, establishing strong credibility that converts casual developer visitors into paying contract clients.",
    lessonsLearned: "Strict separation between static layouts and lazy-loaded client states is crucial for preventing hydration mismatches and maintaining fast Time to Interactive (TTI).",
    liveUrl: "https://michaelbriones-dev.vercel.app",
    githubUrl: "https://github.com/mchlbrns/kelly-portfolio",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Next.js Developer Portfolio Website showcasing business automation case studies and full-stack projects.",
  },
  {
    slug: "ai-customer-support",
    title: "Enterprise AI Customer Support Agent",
    category: "AI Automation",
    problem: "A high volume of repetitive customer inquiries was overwhelming support staff, increasing response delays, and lowering customer satisfaction ratings.",
    challenge: "Integrating a large language model (LLM) with real-time internal databases while preventing hallucinations, safeguarding user privacy, and keeping API latency under 2 seconds.",
    solution: "Developed a custom LangChain agent utilizing the OpenAI GPT-4 API. Built a vector retrieval-augmented generation (RAG) system with a Node.js middleware layer, letting the chatbot fetch real-time shipping and billing data securely.",
    tech: ["Python", "LangChain", "OpenAI API", "React", "Node.js", "Vector DB"],
    architecture: "Python server hosting LangChain agents, connected via a REST API to a React frontend. RAG pipeline uses semantic search over a pinecone database to fetch relevant knowledge articles.",
    results: "Reduced average customer support response time by 85% and autonomously resolved 60% of tier-1 support tickets.",
    clientValue: "Saved staff over 20 hours a week in support load and drastically improved customer retention by providing instant, accurate 24/7 assistance.",
    lessonsLearned: "Prompt chaining and strict system prompts are more reliable than fine-tuning for preventing hallucinations when referencing structured internal policy manuals.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "AI Automation Developer using LangChain and OpenAI to build an enterprise customer support agent.",
  },
  {
    slug: "excel-autohotkey-automation",
    title: "Excel & Legacy System AHK Automation",
    category: "Workflow Automation",
    problem: "An operations team was losing over 15 hours weekly to manual spreadsheet updates and copying duplicate record fields between offline legacy desktop software systems.",
    challenge: "Desktop target software lacked open APIs, requiring direct UI interaction scripting that had to remain reliable despite variable layout loading speeds.",
    solution: "Developed customized AutoHotkey (AHK) and Autoit macros that automated background spreadsheet cell queries, performed custom data transformations, and automatically entered records into desktop forms.",
    tech: ["AutoHotkey", "Microsoft Excel", "Automation", "Windows Scripting", "COM Interop"],
    architecture: "Desktop automation scripts utilizing Windows COM interface to directly manipulate Excel worksheets and DLL calls to capture and dispatch active win32 form messages.",
    results: "Eliminated 100% of manual effort for targeted operations workflows and reduced data entry error rate to 0%.",
    clientValue: "Reclaimed 15 hours of human effort every week, allowing employees to redirect their focus to client onboarding and operations instead of manual data entry.",
    lessonsLearned: "Using AHK's COM Object interfaces is significantly faster and less prone to disruption than simulating keyboard shortcuts or mouse clicks on spreadsheet cell grids.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Workflow Automation Developer using AutoHotkey and Excel to automate manual data entry pipelines.",
  },
  {
    slug: "google-sheets-telegram-chatbot",
    title: "Real-Time Field Technician Chatbot",
    category: "Workflow Automation",
    problem: "Field technicians needed a real-time messaging system to dynamically query inventory and status details stored in a central Google Sheet without using a complex laptop dashboard.",
    challenge: "Handling concurrent Telegram requests while respecting Google Sheets API rate limits and securing data access for authorized phone numbers only.",
    solution: "Built a lightweight, secure Telegram chatbot in Python. Authenticated incoming technician IDs against an access list, parsed natural language commands, and dynamically queried rows using the Google Sheets API.",
    tech: ["Python", "Google Sheets API", "Telegram Bot API", "Serverless", "Zonal Cache"],
    architecture: "Serverless Python architecture using webhooks. Real-time Google Sheets API client calls combined with local memory caching to prevent exceeding API rate quotas under load.",
    results: "Reduced support desk callback queues by 40% with technician response times averaging under 2 seconds.",
    clientValue: "Provided technicians with instant inventory answers directly on their mobile phones, eliminating downtime at customer job sites.",
    lessonsLearned: "Implementing a simple TTL (time-to-live) cache layer for sheet reads dramatically reduced API usage costs and improved response times for frequent repeat queries.",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Python Freelance Developer building a Telegram Chatbot integrated with Google Sheets for inventory tracking.",
  }
];
