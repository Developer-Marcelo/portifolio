import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";

export type ContactMethodProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  color: string;
  description: string;
};

export const contactMethods: ContactMethodProps[] = [
  {
    icon: Github,
    label: "GitHub",
    value: "@Developer-Marcelo",
    href: "https://github.com/Developer-Marcelo",
    color: "from-primary to-primary/60",
    description: "Check out my repositories and contributions",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Marcelo Eduardo",
    href: "https://www.linkedin.com/in/marceloeduardoec/",
    color: "from-secondary to-secondary/60",
    description: "Connect with me professionally",
  },
  {
    icon: Mail,
    label: "Email",
    value: "desenvolvedoreasycode@gmail.com",
    href: "mailto:desenvolvedoreasycode@gmail.com",
    color: "from-accent to-accent/60",
    description: "Reach out for opportunities",
  },
];

export type StatsProps = {
  label: string;
  value: string;
  color: string;
};

export const stats: StatsProps[] = [
  { label: "Years Experience", value: "8+", color: "text-primary" },
  { label: "NPM Packages", value: "2+", color: "text-secondary" },
  { label: "Tech Stack", value: "20+", color: "text-accent" },
  { label: "Languages", value: "4", color: "text-success" },
];
