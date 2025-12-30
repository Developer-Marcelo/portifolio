import { motion } from "framer-motion";
import { ContactMethodProps } from "@/src/mock/contact.mock";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardContactMethods({
  method,
  index,
  isInView,
}: {
  method: ContactMethodProps;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      key={method.label}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      whileHover={{ y: -10 }}
    >
      <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 h-full group">
        <motion.div
          className={`w-16 h-16 rounded-xl bg-linear-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <method.icon className="text-white" size={28} />
        </motion.div>
        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
          {method.label}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {method.description}
        </p>
        <Button
          variant="outline"
          className="w-full mt-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
          asChild
        >
          <a href={method.href} target="_blank" rel="noopener noreferrer">
            Visit {method.label}
          </a>
        </Button>
      </Card>
    </motion.div>
  );
}
