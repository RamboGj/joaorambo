/**
 * Every piece of copy the page renders, kept out of the markup so the content
 * can be edited without touching layout.
 */

export const profile = {
  name: "João Rambo",
  initials: "JR",
  legalName: "João Pedro Rambo Guanabara",
  role: "Fullstack Software Engineer",
  email: "jpramboguanabarar@gmail.com",
  github: "https://github.com/RamboGj",
  linkedin: "https://www.linkedin.com/in/rambog/",
  resume: "/Joao_Rambo_resume.pdf",
  portrait: "/profile.webp",
  location: "Blumenau, SC · Brazil",
  availability: "Open to Senior roles — remote",
} as const;

/**
 * `Work` is hidden in the source design — the Experience section it targets
 * still carries the `work` id, so unhiding it is a one-word change.
 */
export const navLinks: { href: string; label: string; hidden?: boolean }[] = [
  { href: "#work", label: "Work", hidden: true },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const marqueeItems = [
  "TypeScript",
  "Rust",
  "Next.js",
  "Node.js",
  "Fintech",
  "GCP · AWS",
  "Terraform",
  "Web3",
  "Distributed Systems",
] as const;

export const stats = [
  { value: "5+", label: "years shipping production software" },
  { value: "9", label: "teams & startups across 4 countries" },
  { value: "2×", label: "co-founder — CPO & shipped to stores" },
  { value: "E2E", label: "own it — architecture → prod → on-call" },
] as const;

export type Role = {
  dates: string;
  location: string;
  title: string;
  company: string;
  link?: string;
  linkLabel?: string;
  blurb: string;
  tags: string[];
};

export const roles: Role[] = [
  {
    dates: "May 2025 – Apr 2026",
    location: "Remote · United States",
    title: "Fullstack Software Engineer",
    company: "Haven",
    blurb:
      "Fintech team building accounting & payroll automation. Shipped features across backend and frontend and owned cloud infrastructure end to end — plus on-call, hotfixes, and 24/7 production support.",
    tags: [
      "Rust",
      "Node.js",
      "Next.js",
      "TypeScript",
      "GCP",
      "Terraform",
      "TanStack Query",
      "Redis",
      "Datadog",
    ],
  },
  {
    dates: "Dec 2024 – May 2025",
    location: "Remote · Brazil",
    title: "Software Engineer",
    company: "Stealth Startup",
    blurb:
      "Owned frontend architecture, design system, and analytics for a real-time, AI-powered web app — AI chat with audio recording and live transcription, plus a metrics dashboard feeding GA into BigQuery.",
    tags: ["React", "Zustand", "BigQuery", "Cypress", "Sentry"],
  },
  {
    dates: "Mar 2024 – Mar 2025",
    location: "Remote · Brazil",
    title: "Co-Founder & CPO",
    company: "AITR",
    link: "https://aitr.tech/",
    linkLabel: "aitr.tech",
    blurb:
      "Co-founded AI Tech Report; owned product vision and built it hands-on from concept to production. Selected for the Google Cloud for Startups program (São Paulo cohort).",
    tags: ["Next.js", "TypeScript", "OAuth", "GitHub API", "Vercel", "Product"],
  },
  {
    dates: "Mar 2024 – Nov 2024",
    location: "Remote · Italy",
    title: "Fullstack Software Engineer",
    company: "QiBit",
    blurb:
      "Built fullstack features in a microfrontend architecture — React frontends and serverless AWS backends, integrating a shared design system with the design team.",
    tags: ["React", "AWS Lambda", "DynamoDB", "S3", "Cognito"],
  },
  {
    dates: "Dec 2022 – Nov 2023",
    location: "Remote · United States",
    title: "Senior Frontend Engineer",
    company: "Open Access Ventures",
    blurb:
      "Owned frontend architecture across multiple Web3 products — blockchain, 3D web, and cross-platform. Mentored engineers and set frontend standards.",
    tags: [
      "Next.js",
      "React Native",
      "Wagmi",
      "Three.js",
      "Framer Motion",
      "Solidity",
    ],
  },
  {
    dates: "2021 – 2022",
    location: "Brazil · Remote",
    title: "Frontend & Fullstack Engineer",
    company: "Scalable · Sonica · Troquecommerce",
    blurb:
      "Earlier roles across Web3 MVPs and e-commerce — sole or first engineer on several products, building full frontends and blockchain integrations in Next.js and TypeScript. Promoted from intern at Troquecommerce.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Web3.js", "Ethers.js"],
  },
];

export const stack = [
  { label: "/ languages", items: ["TypeScript", "JavaScript", "Rust", "Golang"] },
  {
    label: "/ frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TanStack Query",
      "TailwindCSS",
      "Expo",
    ],
  },
  { label: "/ backend", items: ["Node.js", "Fastify", "NestJS", "Express", "Axum"] },
  {
    label: "/ cloud & infra",
    items: ["Google Cloud", "AWS", "Terraform", "Docker", "GitHub Actions"],
  },
  { label: "/ data", items: ["PostgreSQL", "Redis", "Prisma", "Drizzle", "SQLite"] },
  {
    label: "/ ai tools",
    items: ["Claude Code", "Cursor", "GitHub Copilot", "Claude Skills"],
  },
  { label: "/ web3", items: ["Ethers.js", "Wagmi", "Web3.js", "Solidity"] },
  {
    label: "/ testing & obs",
    items: ["Jest", "Vitest", "Cypress", "Sentry", "PostHog"],
  },
  {
    label: "/ architecture",
    items: [
      "Distributed systems",
      "Event-driven",
      "Microfrontends",
      "DDD",
      "REST · GraphQL",
    ],
  },
] as const;
