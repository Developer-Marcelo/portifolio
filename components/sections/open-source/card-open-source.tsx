import { ProjectProps } from "@/src/mock/open-source.mock";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package, Star } from "lucide-react";

export default function CardOpenSource({
  project,
  isInView,
  index,
}: {
  project: ProjectProps;
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, rotate: 1 }}
    >
      <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 group backdrop-blur-sm bg-card/95">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-linear-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Package className="text-white" size={32} />
          </motion.div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">NPM</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
          {project.name}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="mb-6 p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm text-accent font-medium">💡 {project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-black text-xs bg-accent/10 hover:bg-accent/20 border border-accent/30"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all bg-transparent"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} className="mr-2" />
            View on NPM
          </a>
        </Button>
      </Card>
    </motion.div>
  );
}
