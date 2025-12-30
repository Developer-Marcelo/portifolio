import { Code2, LucideIcon, Rocket, Users, Zap } from "lucide-react";

export type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export const features: FeatureProps[] = [
  {
    icon: Code2,
    title: "Clean Code Advocate",
    description:
      "Writing maintainable, readable, and well-documented code following industry best practices and modern standards",
    color: "from-primary to-primary/60",
  },
  {
    icon: Rocket,
    title: "SOLID Principles",
    description:
      "Applying SOLID principles to create robust, scalable, and maintainable software with clear separation of concerns",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Users,
    title: "Domain Driven Design",
    description:
      "Implementing DDD patterns and tactical design to model complex business domains with bounded contexts",
    color: "from-accent to-accent/60",
  },
  {
    icon: Zap,
    title: "Clean Architecture",
    description:
      "Building applications with Clean Architecture ensuring testability, independence, and long-term maintainability",
    color: "from-success to-success/60",
  },
];
