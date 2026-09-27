"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectData } from "@/data/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CaseStudyHeroProps = {
  project: ProjectData;
  meta: React.ReactNode;
};

export function CaseStudyHero({ project, meta }: CaseStudyHeroProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const layoutId = `project-image-${project.slug}`;

  return (
    <section className="pt-10 md:pt-14 lg:pt-18">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <div className="lg:col-span-7 xl:col-span-8">
          <motion.p
            className="text-[12px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease }}
          >
            {project.number}
          </motion.p>

          <motion.h1
            className="mt-4 text-[clamp(3.5rem,17vw,6rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[var(--color-text)] md:text-[clamp(4rem,10vw,10rem)] md:leading-[0.9]"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.72, delay: 0.04, ease }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="mt-5 text-[15px] leading-[1.45] text-[var(--color-text-secondary)] md:text-[16px]"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.66, delay: 0.08, ease }}
          >
            {project.category}
          </motion.p>

          {project.intro ? (
            <motion.p
              className="mt-8 max-w-[16ch] text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.05] tracking-[-0.035em] text-[var(--color-text)]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.68, delay: 0.12, ease }}
            >
              {project.intro}
            </motion.p>
          ) : null}
        </div>

        <motion.div
          className="lg:col-span-5 lg:self-end xl:col-span-4 xl:pb-6"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.66, delay: 0.16, ease }}
        >
          {meta}
        </motion.div>
      </div>

      <motion.div
        className="mt-12 overflow-hidden rounded-[2px] md:mt-16 lg:mt-20"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0.88, scale: 1.02, clipPath: "inset(8% 0 0 0)" }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, clipPath: "inset(0 0 0 0)" }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.88, delay: 0.12, ease }}
      >
        <motion.div layoutId={layoutId} className="relative aspect-[16/10] w-full bg-[var(--color-bg-elevated)] md:aspect-[16/9]">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            priority
            sizes="(min-width: 1280px) 88vw, (min-width: 768px) 92vw, 100vw"
            className={`object-cover ${project.heroImage.position ?? "object-center"}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
