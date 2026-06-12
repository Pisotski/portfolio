export type Project = {
  /** Short identifier, also used as React key */
  slug: string;
  title: string;
  role: string;
  /** Optional one-line badge, e.g. an award */
  highlight?: string;
  /** Metric-backed accomplishments, sourced from the resume */
  bullets: string[];
  tech: string[];
  /** TODO: replace placeholder GitHub links with real repo URLs */
  github: string;
};

export const projects: Project[] = [
  {
    slug: "ctd-rag-chatbot",
    title: "AI Benefits Chatbot — RAG Evaluation Infrastructure",
    role: "Full-Stack Developer, Code the Dream",
    bullets: [
      "Built full-stack evaluation infrastructure on the LLM-as-a-Judge paradigm, combining automated multi-metric scoring with human validation workflows.",
      "Integrated Langfuse observability to visualize production responses via structured Scores and Sessions, increasing actionable visibility by 40%.",
      "Designed a modular MongoDB Filestore supporting multiple vector store configurations, improving retrieval precision by 60% across production programs.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Langfuse", "LangChain", "OpenAI"],
    github: "https://github.com/Pisotski", // TODO: real repo URL
  },
  {
    slug: "chef-jul",
    title: "Chef Jul — AI Meal-Planning Assistant",
    role: "Team Lead & Full-Stack Developer",
    highlight: "2nd Place, MetLife Hackathon 2025",
    bullets: [
      "Led the team from concept to a production-ready Firebase backend in under 48 hours.",
      "Architected a parallelized LLM generation pipeline, cutting total processing time by 40% to sub-55s execution under constrained hardware.",
      'Orchestrated a multi-agent "Split-Brain" workflow enabling near-instant (~2s) user preference adjustments via shared state synchronization.',
    ],
    tech: ["Firebase", "React", "Node.js", "LLM Orchestration"],
    github: "https://github.com/Pisotski", // TODO: real repo URL
  },
  {
    slug: "vanlife",
    title: "VanLife — Van Rental Platform",
    role: "Full-Stack Developer",
    bullets: [
      "Engineered a scalable Node.js/Express API with centralized error handling and data validation schemas for high availability and system integrity.",
      "Built a secure authentication layer with JWT-based middleware, granular route protection, and secure session management.",
      'Leveraged React Router’s Actions/Loaders pattern to shift data fetching into the transition phase, eliminating "loading spinners" for a seamless, state-driven UI.',
    ],
    tech: ["Node.js", "Express", "React Router", "JWT", "MongoDB"],
    github: "https://github.com/Pisotski", // TODO: real repo URL
  },
  {
    slug: "avax",
    title: "AVAX — Large-Scale Data API",
    role: "Full-Stack Developer",
    bullets: [
      "Integrated AWS S3 and MongoDB via Mongoose schemas, handling datasets of over 100 million records and reducing response times from 4s to 130ms.",
      "Implemented Redis caching and Dockerized the server, achieving a 56% performance improvement.",
      "Diagnosed bottlenecks with Loader.io, Artillery.io, and New Relic to drive scalability and reliability work.",
    ],
    tech: ["AWS S3", "MongoDB", "Redis", "Docker", "Node.js"],
    github: "https://github.com/Pisotski", // TODO: real repo URL
  },
];
