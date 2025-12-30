"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { achievements } from "@/src/mock/metrics.mock";
import CardMetrics from "./card-metrics";

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="metrics"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-success/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-success/10 border border-success/20 flex items-center gap-2">
              <TrendingUp size={18} className="text-success" />
              <span className="text-sm font-medium text-success">
                Impact & Results
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Delivering Measurable Value
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record of building high-quality solutions that make a
            real impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <CardMetrics
              key={achievement.title}
              achievement={achievement}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 max-w-4xl mx-auto bg-linear-to-r from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm font-medium">Years with TypeScript</div>
                <div className="text-xs text-muted-foreground mt-1">
                  React, Next.js, NestJS, Node.js
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                <div className="text-sm font-medium">Years with Python</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Automation, Bots, API Integration
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm font-medium">Technologies Mastered</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Full Stack, Architecture
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
