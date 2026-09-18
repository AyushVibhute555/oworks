import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  animationType?: "fade-up" | "fade-in" | "zoom-in" | "slide-right" | "slide-left";
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  animationType = "fade-up"
}: ScrollRevealProps) {
  const getVariants = (): Variants => {
    switch (animationType) {
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
      transition={{ 
        duration: duration, 
        delay: delay / 1000, // framer-motion uses seconds for delay
        ease: [0.16, 1, 0.3, 1] // editorial easing cubic-bezier
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
