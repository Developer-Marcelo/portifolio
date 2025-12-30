export type SkillCategoryProps = {
    title: string;
    skills: string[];
    color: string;
}

export const skillCategories: SkillCategoryProps[] = [
  {
    title: "Languages & Typing",
    skills: ["TypeScript", "JavaScript", "Python", "Lua"],
    color: "primary",
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    color: "secondary",
  },
  {
    title: "Backend & APIs",
    skills: ["NestJS", "Fastify", "Express", "REST APIs", "WebSockets"],
    color: "accent",
  },
  {
    title: "Database & ORMs",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle", "Supabase"],
    color: "success",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "NPM Publishing", "CI/CD", "Linux"],
    color: "primary",
  },
  {
    title: "Architecture & Design",
    skills: ["Clean Architecture", "SOLID", "DDD", "Design Patterns", "TDD"],
    color: "secondary",
  },
];