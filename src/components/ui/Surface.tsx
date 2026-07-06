"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SurfaceProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

export function Surface({ children, className, hover = true, padding = false }: SurfaceProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn("surface", padding && "p-6", className)}
    >
      {children}
    </motion.div>
  );
}
