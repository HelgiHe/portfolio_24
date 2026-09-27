"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ProjectFeatureProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  imageAlt?: string;
  reverse?: boolean;
  imagePosition?: string;
  priority?: boolean;
  imageFilter?: string;
  imageOpacity?: number;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0, reduceMotion = false) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      duration: 0.7,
      delay,
      ease,
    },
  };
}

export function ProjectFeature({
  number,
  title,
  category,
  description,
  image,
  slug,
  imageAlt,
  reverse = false,
  imagePosition = "object-center",
  priority = false,
  imageFilter = "contrast(0.93) saturate(0.92) brightness(1.02)",
  imageOpacity = 0.97,
}: ProjectFeatureProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const href = `/work/${slug}`;
  const layoutId = `project-image-${slug}`;

  return (
    <article className="border-b border-[var(--color-border)]/60 py-14 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <div
          className={`order-1 lg:col-span-4 lg:pr-4 xl:col-span-[4] ${
            reverse ? "lg:col-start-9" : ""
          }`}
        >
          <motion.p
            className="text-[12px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]"
            {...fadeUp(0, reduceMotion)}
          >
            {number}
          </motion.p>

          <motion.div
            className="mt-4 lg:mt-5"
            {...fadeUp(0.05, reduceMotion)}
          >
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-[var(--color-text)]">
              {title}
            </h2>
            <p className="mt-2 text-[14px] leading-[1.45] text-[var(--color-text-secondary)] md:mt-3">
              {category}
            </p>
          </motion.div>
        </div>

        <motion.div
          className={`order-2 lg:col-span-8 xl:col-span-[8] ${
            reverse ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0.85, scale: 1.025, clipPath: "inset(8% 0 0 0)" }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.85, ease }}
        >
          <motion.div layoutId={layoutId}>
            <Link
              href={href}
              className="group block overflow-hidden rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-text)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              aria-label={`View ${title} case study`}
            >
              <motion.div
                className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-elevated)]"
                whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.6, ease }}
              >
                <Image
                  src={image}
                  alt={imageAlt ?? `${title} project preview`}
                  fill
                  sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 62vw, 100vw"
                  className={`object-cover ${imagePosition}`}
                  style={{
                    filter: imageFilter,
                    opacity: imageOpacity,
                  }}
                  priority={priority}
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={`order-3 lg:col-span-4 lg:max-w-[22rem] lg:pr-4 xl:col-span-[4] ${
            reverse ? "lg:col-start-9" : ""
          }`}
          {...fadeUp(0.1, reduceMotion)}
        >
          <p className="text-[15px] leading-[1.55] text-[var(--color-text-secondary)] md:text-[16px]">
            {description}
          </p>
        </motion.div>

        <motion.div
          className={`order-4 lg:col-span-4 lg:pr-4 xl:col-span-[4] ${
            reverse ? "lg:col-start-9" : ""
          }`}
          {...fadeUp(0.14, reduceMotion)}
        >
          <Link
            href={href}
            className="group inline-flex items-center gap-2 border-b border-[var(--color-text)] pb-[2px] text-[13px] leading-none text-[var(--color-text)] transition-[padding] duration-300 ease-out hover:pr-1 focus-visible:pr-1 focus-visible:outline-none"
          >
            <span>View case study</span>
            <motion.span
              aria-hidden="true"
              className="inline-block"
              whileHover={reduceMotion ? undefined : { x: 3, y: -2 }}
              transition={{ duration: 0.28, ease }}
            >
              ↗
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
