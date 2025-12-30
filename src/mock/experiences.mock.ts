export type ExperienceProps = {
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: ExperienceProps[] = [
  {
    title: "Full Stack Developer & Software Architect",
    company: "Professional Experience",
    duration: "5+ years",
    description:
      "Architecting and building scalable, high-performance web applications using the Node.js ecosystem with enterprise-level architectural patterns",
    highlights: [
      "🚀 Built production-ready applications with Next.js 14+, React 18+, and NestJS",
      "⚡ Developed robust microservices with Fastify and Express achieving 99.9% uptime",
      "🏗️ Implemented Clean Architecture, SOLID principles, and Domain Driven Design in enterprise projects",
      "📦 Published and maintained NPM packages used by the developer community",
      "🔧 Integrated complex third-party APIs and real-time WebSocket communications",
    ],
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Python Automation Engineer",
    company: "Automation & Integration",
    duration: "3 years",
    description:
      "Designing and developing intelligent automation solutions, bots, and API integrations with focus on reliability and scalability",
    highlights: [
      "🤖 Developed high-volume Telegram bots handling thousands of daily interactions",
      "🔄 Created automated workflows for betting house integrations with 24/7 uptime",
      "🔌 Built robust API integrations with error handling and retry mechanisms",
      "📊 Optimized Python scripts reducing execution time by 60%",
      "🛡️ Implemented security best practices for sensitive data handling",
    ],
    technologies: [
      "Python",
      "Telegram Bot API",
      "REST APIs",
      "MongoDB",
      "Redis",
    ],
  },
];
