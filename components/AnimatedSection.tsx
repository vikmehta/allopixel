"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeIn, scaleUp, staggerContainer } from "@/lib/motion";

const variantMap: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  scaleUp,
  staggerContainer,
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleUp" | "staggerContainer";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  threshold = 0.12,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variantMap[variant];
  const animationVariant = delay
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...(typeof selectedVariant.visible === "object" &&
            "transition" in selectedVariant.visible
              ? (selectedVariant.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : selectedVariant;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
