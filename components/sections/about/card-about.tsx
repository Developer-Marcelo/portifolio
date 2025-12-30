import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FeatureProps } from "@/src/mock/about.mock";

export default function CardAbout({
  feature,
  isInView,
  index,
}: {
  feature: FeatureProps;
  isInView: boolean;
  index: number;
}) {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <feature.icon className="text-white" size={28} />
        </motion.div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
}
