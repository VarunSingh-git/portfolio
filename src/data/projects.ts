export interface Project {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  detailedDescription: string;
  category: "Full-Stack System" | "Backend & API" | "Database Architecture" | "Web Application";
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: "Completed" | "Active Development" | "Prototype" | "Production Ready";
  order: number;
  backendHighlights: string[];
  systemMetrics?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: "library-management-system",
    title: "Library Concurrency & Fine Engine",
    badge: "ZERO OVERDUE ESCAPEES",
    shortDescription:
      "Transactional cataloging and fine-accrual system with mutex locking. Prevents book double-checkout collisions even under rapid concurrent borrowing.",
    detailedDescription:
      "Engineered an end-to-end library operation engine designed to manage catalog inventory, member records, borrowing lifecycles, and fine settlements. The backend architecture enforces strict inventory locking so physical copies cannot be double-checked out simultaneously by competing threads.",
    category: "Full-Stack System",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React", "JWT Auth", "Tailwind CSS"],
    image: "/images/projects/library-system.svg",
    imageAlt: "Architecture and dashboard preview of the Library Management System",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/library-system",
    featured: true,
    status: "Completed",
    order: 1,
    backendHighlights: [
      "Atomic transactional book availability decrement and waitlist queuing",
      "Automated cron jobs for overdue calculation and daily fine accrual",
      "Role-Based Access Control (Admin, Librarian, Member) with signed JWT tokens"
    ],
    systemMetrics: [
      { label: "Data Models", value: "7 Entities" },
      { label: "API Endpoints", value: "24 Routes" }
    ]
  },
  {
    id: "restaurant-billing-system",
    title: "Precision POS & KOT Billing Ledger",
    badge: "FLOAT-FREE LEDGER",
    shortDescription:
      "Decimal-safe point-of-sale and kitchen order dispatcher. Forbids floating-point arithmetic errors while managing multi-table dining states.",
    detailedDescription:
      "A point-of-sale system engineered for high-throughput dining environments where waitstaff hammer buttons under dinner rush pressure. Handles table state machines, kitchen order printing dispatch, itemized tax calculation (GST/service charges), dynamic split payments, and end-of-day sales reconciliation without losing a single cent.",
    category: "Full-Stack System",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "React", "Tailwind CSS"],
    image: "/images/projects/restaurant-billing.svg",
    imageAlt: "POS terminal and billing ledger preview for Restaurant Billing System",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/restaurant-billing",
    featured: true,
    status: "Completed",
    order: 2,
    backendHighlights: [
      "ACID-compliant order state transitions to prevent race conditions during bill generation",
      "Indexed transactional queries for instantaneous daily revenue & tax reporting",
      "Streamlined receipt generation formatted for thermal printing and PDF export"
    ],
    systemMetrics: [
      { label: "Order State Latency", value: "< 45ms" },
      { label: "Precision", value: "Decimal-Safe Currency" }
    ]
  },
  {
    id: "jagdamba-tour-travels",
    title: "Fleet Dispatch & Booking Platform",
    badge: "DISPATCH WITHOUT CHAOS",
    shortDescription:
      "Custom booking platform with automated date-range conflict detection preventing double-booking across multi-city tour itineraries.",
    detailedDescription:
      "Developed a travel logistics platform enabling customers to browse bespoke itineraries, calculate distance-based pricing, and book vehicles. Features automated date-range conflict detection in MongoDB so drivers and vehicles never get promised to two places at once.",
    category: "Full-Stack System",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Nodemailer", "Tailwind CSS"],
    image: "/images/projects/jagdamba-travels.svg",
    imageAlt: "Tour and vehicle reservation interface for Jagdamba Tour & Travels",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/jagdamba-travels",
    featured: true,
    status: "Completed",
    order: 3,
    backendHighlights: [
      "Custom date-range conflict detection preventing vehicle double-booking",
      "Automated transactional email confirmations and SMS alert dispatch triggers",
      "Dynamic pricing engine calculating seasonal tariffs, fuel surcharges, and tolls"
    ],
    systemMetrics: [
      { label: "Fleet Itineraries", value: "30+ Routes" },
      { label: "Booking Workflow", value: "Zero Overlaps" }
    ]
  },
  {
    id: "api-rate-limiter-cache",
    title: "Distributed Rate Limiter & Cache",
    badge: "DDOS PACIFIER",
    shortDescription:
      "Sliding-window token bucket middleware and Redis cache protecting APIs from malicious bursts with 429 Too Many Requests.",
    detailedDescription:
      "A modular middleware package implementing the sliding-window counter algorithm on top of Redis. Protects upstream application routes from malicious bursts while transparently caching idempotent GET responses with TTL invalidation so the primary database can take a nap.",
    category: "Backend & API",
    technologies: ["Node.js", "TypeScript", "Redis", "Express.js", "Docker", "Jest"],
    image: "/images/projects/rate-limiter.svg",
    imageAlt: "Sliding window token bucket architecture diagram and Redis telemetry",
    githubUrl: "https://github.com",
    featured: false,
    status: "Prototype",
    order: 4,
    backendHighlights: [
      "Atomic Redis Lua scripts avoiding race conditions during concurrent limit checks",
      "Graceful fallback to in-memory LRU cache if Redis connection suffers latency",
      "Configurable client identification via IP, API key, or authenticated user ID"
    ],
    systemMetrics: [
      { label: "Throughput", value: "10k+ req/sec" },
      { label: "Overhead", value: "< 2ms" }
    ]
  },
  {
    id: "inventory-dispatch-ledger",
    title: "Warehouse Inventory & Dispatch Ledger",
    badge: "TAMPER-PROOF AUDIT",
    shortDescription:
      "Double-entry stock movement ledger ensuring zero unrecorded shrinkage. If a single box goes missing, mathematics raises an exception.",
    detailedDescription:
      "A robust inventory management system built on double-entry accounting principles: every stock arrival, bin transfer, and dispatch creates balanced debit and credit ledger rows, making silent inventory drift mathematically impossible and keeping warehouse managers sane.",
    category: "Database Architecture",
    technologies: ["PostgreSQL", "Node.js", "Express.js", "React", "Docker"],
    image: "/images/projects/inventory-ledger.svg",
    imageAlt: "Double-entry warehouse inventory ledger and bin transfer tracker",
    githubUrl: "https://github.com",
    featured: false,
    status: "Active Development",
    order: 5,
    backendHighlights: [
      "PostgreSQL row-level locking during warehouse picker dispatch operations",
      "Complete immutable audit trail for every SKU movement across bin locations",
      "Automated low-stock threshold triggers and supplier restock purchase order drafts"
    ],
    systemMetrics: [
      { label: "Ledger Audit", value: "100% Immutable" },
      { label: "Stock Accuracy", value: "Real-time" }
    ]
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter((p) => p.featured);
};

export const getAllProjects = (): Project[] => {
  return [...projectsData].sort((a, b) => a.order - b.order);
};
