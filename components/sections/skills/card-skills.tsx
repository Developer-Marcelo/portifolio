import { Badge } from "@/components/ui/badge";
import { SkillCategoryProps } from "@/src/mock/skills.mock";
import { motion } from "framer-motion";

export default function CardSkills({
  project,
  isInView,
  categoryIndex,
}: {
  project: SkillCategoryProps;
  isInView: boolean;
  categoryIndex: number;
}) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="bg-card border-2 border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
    >
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: categoryIndex * 0.1 + skillIndex * 0.05,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="secondary"
              className={`text-sm py-1.5 px-3 bg-${project.color}/10 hover:bg-${project.color}/20 border border-${project.color}/30 text-foreground`}
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
