"use client";

import { motion } from "framer-motion";
import { Code2, Flag, Globe, Heart } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-brand-500/10 blur-3xl" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl shadow-brand-900/5"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs text-muted-foreground">Meridian Partners - One Team</span>
        </div>

        <div className="p-6">
          {/* Dual partnership visual */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-brand-200 bg-brand-50/80 p-4 dark:border-brand-800 dark:bg-brand-950/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Flag className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="mt-3 text-sm font-semibold">Friend Americans</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                U.S. citizens providing info, environments & payments
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-border bg-muted/40 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="mt-3 text-sm font-semibold">Foreign Developers</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Global engineers building software for U.S. companies
              </div>
            </motion.div>
          </div>

          {/* Connection bridge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75 }}
            className="relative my-4 flex items-center justify-center"
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-brand-200 dark:bg-brand-800" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-600 bg-card">
              <Heart className="h-4 w-4 text-brand-600" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="rounded-2xl border border-border bg-muted/40 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-white">
                <Code2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold">Together for U.S. Companies</div>
                <div className="text-xs text-muted-foreground">Reliable delivery · Seamless collaboration</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 rounded-2xl bg-brand-900 px-4 py-3 text-center text-sm font-medium text-white"
          >
            One team. Two strengths. Outstanding results.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
