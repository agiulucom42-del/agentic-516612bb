"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string;
  delta?: string;
  icon: ReactNode;
}

export function MetricCard({ label, value, delta, icon }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 shadow-lg shadow-emerald-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">
            {label}
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
          {delta ? (
            <p className="mt-2 text-xs text-emerald-300">
              <span className="font-semibold">+{delta}</span> sync gain
            </p>
          ) : null}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-emerald-300">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
