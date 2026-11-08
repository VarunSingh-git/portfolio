export interface TechItem {
  name: string;
  role: string;
  description: string;
  badge: string;
}

export interface TechGroup {
  id: string;
  title: string;
  subtitle: string;
  stepNumber: string;
  description: string;
  items: TechItem[];
}

export const techStackData: TechGroup[] = [
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "RUNTIME, PIPELINES & DAMAGE CONTROL",
    stepNumber: "01",
    description: "Architecting performant server runtimes, defensive middleware, and decoupled service layers that don't panic when traffic spikes.",
    items: [
      {
        name: "Node.js",
        role: "Event-Driven Runtime",
        description: "Asynchronous I/O powerhouse. Single-threaded bliss until someone blocks the event loop with synchronous file operations.",
        badge: "Async Engine"
      },
      {
        name: "Express.js",
        role: "Routing Framework",
        description: "Minimalist routing backbone. Ideal for custom middleware pipelines that sanitize inputs before they touch the database.",
        badge: "HTTP Backbone"
      },
      {
        name: "NestJS",
        role: "Enterprise Architecture",
        description: "Modular TypeScript framework with dependency injection and DTOs for projects intended to survive long-term team churn.",
        badge: "Enterprise"
      },
      {
        name: "REST APIs",
        role: "Contract Design",
        description: "Predictable resource endpoints with explicit status codes, idempotency keys, pagination, and error contracts that explain what went wrong.",
        badge: "Deterministic"
      },
      {
        name: "Authentication & RBAC",
        role: "Security & Guarding",
        description: "Stateless JWT sessions, Argon2/bcrypt password hashing, refresh token rotation, and route guards. Guilty until proven innocent.",
        badge: "Zero Trust"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Caching",
    subtitle: "WHERE STATE ACTUALLY MATTERS",
    stepNumber: "02",
    description: "Designing schemas with strict validation, query plan tuning, and low-latency caching layers to prevent database CPUs from catching fire.",
    items: [
      {
        name: "PostgreSQL",
        role: "Relational Database",
        description: "Relational modeling, foreign keys, ACID compliance, transactions, and Prisma/pg integrations. The database you trust when money is at stake.",
        badge: "ACID Guardian"
      },
      {
        name: "MongoDB",
        role: "Document Store",
        description: "Document storage with Mongoose schemas, compound indexes, aggregation pipelines, and atomic updates. Flexible schema, disciplined execution.",
        badge: "Document Store"
      },
      {
        name: "Redis",
        role: "In-Memory Store",
        description: "In-memory data structures for sub-millisecond session caches, rate-limiting counters, and pub/sub queues. Fast, volatile, and indispensable.",
        badge: "Sub-ms Cache"
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "THE CLIENT-FACING ILLUSION",
    stepNumber: "03",
    description: "Building responsive, accessible, and fast client interfaces that bridge cleanly to backend APIs without drowning in bloated dependencies.",
    items: [
      {
        name: "Next.js",
        role: "Full-Stack React",
        description: "App Router, Server Components, streaming SSR, dynamic route handlers, and SEO optimization. Best-of-both-worlds full-stack ergonomics.",
        badge: "SSR / App Router"
      },
      {
        name: "React",
        role: "UI Component Library",
        description: "Component state, custom hooks, and memoized rendering trees that keep UI responsive under heavy state churn.",
        badge: "Declarative UI"
      },
      {
        name: "TypeScript",
        role: "Static Type System",
        description: "Strict end-to-end type safety spanning API contracts, database schemas, and frontend view models. Catching typos before users find them.",
        badge: "Type Sentry"
      },
      {
        name: "Tailwind CSS",
        role: "Utility Styling",
        description: "Utility-first design tokens, responsive breakpoints, editorial fluid layouts, and zero-runtime stylesheet generation.",
        badge: "Utility Engine"
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    subtitle: "CONTAINMENT & SURVIVAL OPS",
    stepNumber: "04",
    description: "Version control hygiene, containerized environments, and predictable Linux server setups that don't depend on prayers.",
    items: [
      {
        name: "Docker",
        role: "Containerization",
        description: "Multi-stage builds, isolated containerized database instances for local parity, and docker-compose. 'Works on my machine' officially solved.",
        badge: "Reproducible"
      },
      {
        name: "Linux & Bash",
        role: "Server Environment",
        description: "Process management (systemd, PM2), Nginx reverse proxy configurations, SSH, and server log analysis when disaster strikes at midnight.",
        badge: "Server Ops"
      },
      {
        name: "Git & GitHub",
        role: "Version Control",
        description: "Branching workflows, semantic commits, PR reviews, and atomic commits. Because 'git push --force' is a cry for help.",
        badge: "Version Control"
      }
    ]
  }
];
