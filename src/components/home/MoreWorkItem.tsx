"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type MoreWorkItemProps = {
  title: string;
  category: string;
  description: string;
  slug: string;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MoreWorkItem({
  title,
  category,
  description,
  slug,
}: MoreWorkItemProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const href = `/work/${slug}`;

  return (
    <article>
      <Link
        href={href}
        className="group block border-b border-[var(--color-border)] px-0 py-7 transition-colors duration-300 ease-out hover:border-[color:rgba(17,17,17,0.14)] hover:bg-[rgba(17,17,17,0.02)] focus-visible:border-[color:rgba(17,17,17,0.14)] focus-visible:bg-[rgba(17,17,17,0.02)] focus-visible:outline-none md:py-9"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-4 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)_auto] md:items-start lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)_auto]">
          <motion.div
            className="min-w-0"
            whileHover={reduceMotion ? undefined : { x: 3 }}
            whileFocus={reduceMotion ? undefined : { x: 3 }}
            transition={{ duration: 0.3, ease }}
          >
            <h3 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">
              {title}
            </h3>
          </motion.div>

          <motion.span
            aria-hidden="true"
            className="justify-self-end text-[18px] leading-none text-[var(--color-text)] md:col-start-3 md:row-start-1 md:self-start"
            whileHover={reduceMotion ? undefined : { x: 3, y: -2 }}
            whileFocus={reduceMotion ? undefined : { x: 3, y: -2 }}
            transition={{ duration: 0.3, ease }}
          >
            ↗
          </motion.span>

          <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
            <p className="text-[13px] leading-[1.45] text-[var(--color-text-secondary)] md:text-[14px]">
              {category}
            </p>
            <p className="mt-3 max-w-[35ch] text-[13px] leading-[1.55] text-[var(--color-text-muted)] md:text-[14px]">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
