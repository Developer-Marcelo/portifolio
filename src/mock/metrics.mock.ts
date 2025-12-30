import { Code, TrendingUp, Award, Users, LucideIcon } from "lucide-react";

export type AchievementProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  label: string;
  color: string;
};

export const achievements: AchievementProps[] = [
  {
    icon: Code,
    title: "Production-Ready Code",
    description:
      "Building scalable applications serving thousands of users with 100% uptime",
    metric: "100%",
    label: "Uptime",
    color: "from-primary to-primary/60",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "Reduced application load times by implementing code splitting and lazy loading",
    metric: "100%",
    label: "Faster Load",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Award,
    title: "Open Source Impact",
    description:
      "Published NPM packages helping developers worldwide integrate modern solutions",
    metric: "2+",
    label: "NPM Packages",
    color: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "Clean Architecture",
    description:
      "Applying SOLID, DDD, and Clean Architecture patterns in enterprise applications",
    metric: "8+",
    label: "Years Exp",
    color: "from-success to-success/60",
  },
];
