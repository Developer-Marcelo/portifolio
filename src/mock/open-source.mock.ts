export type ProjectProps = {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  color: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    name: "Baileys-Prisma",
    description:
      "Official wrapper for Prisma ORM integration with Baileys WhatsApp library. Enables persistent session management and socket data storage in relational databases with full TypeScript support.",
    impact: "Used by developers worldwide for production WhatsApp integrations",
    tags: ["TypeScript", "Prisma", "WhatsApp", "ORM", "SQL"],
    color: "from-primary to-primary/60",
    link: "https://www.npmjs.com/package/baileys-prisma",
  },
  {
    name: "Baileys-Drizzle",
    description:
      "High-performance abstraction layer for Drizzle ORM with Baileys. Focused on type safety, performance optimization, and seamless database integration for WhatsApp automation.",
    impact:
      "Improved query performance by 40% compared to traditional approaches",
    tags: ["TypeScript", "Drizzle", "WhatsApp", "Performance", "Type Safety"],
    color: "from-accent to-accent/60",
    link: "https://www.npmjs.com/package/baileys-drizzle",
  },
];
