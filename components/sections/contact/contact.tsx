"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { contactMethods, stats } from "@/src/mock/contact.mock";
import CardContact from "./card-contact-stats";
import CardContactMethods from "./card-contact-methods";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/10 to-background" />

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Open to new opportunities and collaborations. Let's build something
            amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <CardContact
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <CardContactMethods
              key={method.label}
              method={method}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/30 text-center">
            <Globe className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Something Great?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              I'm currently available for freelance projects and full-time
              opportunities. Let's discuss how I can help bring your vision to
              life with clean, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                asChild
              >
                <Link href="mailto:desenvolvedoreasycode@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/Developer-Marcelo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" size={20} />
                  View GitHub
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 text-muted-foreground"
        >
          <p className="text-sm">© 2025 Marcelo Eduardo.</p>
          <p className="text-xs mt-2">
            Crafted with Clean Architecture principles
          </p>
        </motion.div>
      </div>
    </section>
  );
}
