import { AchievementProps } from "@/src/mock/metrics.mock";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function CardMetrics({
  achievement,
  isInView,
  index,
}: {
  achievement: AchievementProps;
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      key={achievement.title}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, rotate: 1 }}
    >
      <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-success/50 group">
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <achievement.icon className="text-white" size={28} />
        </motion.div>

        <div className="mb-4">
          <motion.div
            className="text-4xl font-bold text-success mb-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            {achievement.metric}
          </motion.div>
          <div className="text-sm text-muted-foreground font-medium">
            {achievement.label}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-success transition-colors">
          {achievement.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </Card>
    </motion.div>
  );
}
