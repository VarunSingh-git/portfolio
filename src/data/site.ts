export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  subline: string;
  tagline: string;
  statusBadge: string;
  aboutStory: {
    heading: string;
    subheading: string;
    highlights: {
      title: string;
      description: string;
    }[];
    quote: string;
    quoteSubtext: string;
    coreStrengths: {
      id: string;
      title: string;
      tag: string;
      description: string;
    }[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    phoneDisplay: string;
  };
  resumeUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Varun",
  fullName: "Hi I'm Varun Singh",
  role: "MERN Stack & Backend Systems Developer",
  statusBadge: "AVAILABLE FOR SELECT ROLES & CONTRACTS",
  headline: "I architect backends that don't die quietly when traffic hits.",
  subline: "Translating black coffee, edge cases, and unhandled promises into deterministic 200 OKs.",
  tagline: "Writing defensive code because users will click 'Submit' seven times in 300ms and wonder why the server cried.",
  aboutStory: {
    heading: "Behind the Screen & In the Trenches",
    subheading: "A cynical developer's guide to building software that actually stays upright in production.",
    highlights: [
      {
        title: "Behind the Curtain",
        description: "Most developers fall in love with shiny buttons. I care about what happens after the click: when 5,000 requests hit the router, the middleware sweats, and the database has 12ms to survive."
      },
      {
        title: "The Core Stack",
        description: "Node.js, Express, PostgreSQL, MongoDB, and Next.js. I design systems where race conditions go to die, billing calculations reject floating-point math, and schemas refuse to let NULL ruin a weekend."
      },
      {
        title: "Zero Bloat Discipline",
        description: "Client interfaces built with the same cynical pragmatism: fast, accessible, and stripped of the 400 npm dependencies that make modern web apps run like a tractor."
      }
    ],
    quote: "“Write code as if the next maintainer is an angry, caffeinated engineer who knows your IP address.”",
    quoteSubtext: "Defensive by design. Paranoid by default. Documented by principle.",
    coreStrengths: [
      {
        id: "01",
        title: "Idempotent API Architecture",
        tag: "TRUST NO PAYLOAD",
        description: "Strict request validation, safe retries, and clean error envelopes. Because users never read documentation before sending garbage inputs."
      },
      {
        id: "02",
        title: "Schema Integrity & ACID",
        tag: "MATH OVER FAITH",
        description: "Relational constraints in Postgres, atomic transactions in Mongo. Hope is not a database strategy; indexes and foreign keys are."
      },
      {
        id: "03",
        title: "Zero-Trust Security",
        tag: "PARANOID BY DEFAULT",
        description: "Rotated refresh tokens, salted Argon2 hashing, and strict RBAC guards. Assuming every incoming packet is an adversary until proven otherwise."
      }
    ]
  },
  socialLinks: {
    github: "https://github.com/VarunSingh-git",
    linkedin: "https://linkedin.com",
    email: "varunsaini.a.x@gmail.com",
    phone: "+919456803512",
    phoneDisplay: "+91 94568 03512"
  },
  resumeUrl: "/resume.pdf"
};
