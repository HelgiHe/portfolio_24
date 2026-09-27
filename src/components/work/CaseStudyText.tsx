"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CaseStudyTextProps = {
  label?: string;
  text: string;
};

export function CaseStudyText({ label, text }: CaseStudyTextProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      className="grid grid-cols-1 gap-y-4 py-12 md:py-16 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.68, ease }}
    >
      <div className="lg:col-span-3 xl:col-span-3">
        {label ? (
          <p className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {label}
          </p>
        ) : null}
      </div>
      <div className="lg:col-span-7 xl:col-span-6">
        <p className="max-w-[42rem] text-[17px] leading-[1.6] tracking-[-0.015em] text-[var(--color-text-secondary)] md:text-[19px]">
          {text}
        </p>
      </div>
    </motion.section>
  );
}
