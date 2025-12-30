import { Card } from "@/components/ui/card";
import { StatsProps } from "@/src/mock/contact.mock";
import { motion } from "framer-motion";

export default function CardContact({
  stat,
  index,
  isInView,
}: {
  stat: StatsProps;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
        <motion.div
          className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        >
          {stat.value}
        </motion.div>
        <div className="text-sm text-muted-foreground font-medium">
          {stat.label}
        </div>
      </Card>
    </motion.div>
  );
}
