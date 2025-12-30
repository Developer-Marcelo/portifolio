import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExperienceProps } from "@/src/mock/experiences.mock";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function CardExperience({
  experience,
  index,
  isInView,
}: {
  experience: ExperienceProps;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/50 backdrop-blur-sm bg-card/95">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <motion.div
            className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-secondary to-secondary/60 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="text-white" size={32} />
          </motion.div>

          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {experience.title}
              </h3>
              <p className="text-secondary font-semibold mb-2">
                {experience.company}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={18} />
                <span className="font-medium">{experience.duration}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {experience.description}
            </p>

            <ul className="space-y-3 mb-6">
              {experience.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + idx * 0.1,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="text-foreground leading-relaxed">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-black text-xs bg-secondary/10 hover:bg-secondary/20 border border-secondary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
