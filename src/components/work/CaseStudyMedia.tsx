"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import cn from "classnames";
import type { ProjectGalleryBlock } from "@/data/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type CaseStudyMediaProps = {
  block: ProjectGalleryBlock;
};

function aspectClass(aspect?: "landscape" | "portrait" | "square") {
  if (aspect === "portrait") return "aspect-[4/5]";
  if (aspect === "square") return "aspect-square";
  return "aspect-[16/10] md:aspect-[16/9]";
}

export function CaseStudyMedia({ block }: CaseStudyMediaProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const surfaceClass =
    block.surface === "elevated" ? "bg-[var(--color-bg-elevated)]" : "bg-transparent";

  return (
    <motion.section
      className={cn("py-6 md:py-8", surfaceClass)}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0.88, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease }}
    >
      <div
        className={cn(
          "grid gap-4 md:gap-6",
          block.type === "two-up" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
        )}
      >
        {block.items.map((item) => (
          <div
            key={item.src}
            className={cn(
              "relative overflow-hidden rounded-[2px] bg-[var(--color-bg-elevated)]",
              aspectClass(item.aspect),
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                block.type === "two-up"
                  ? "(min-width: 768px) 44vw, 100vw"
                  : "(min-width: 1280px) 88vw, (min-width: 768px) 92vw, 100vw"
              }
              className={`object-cover ${item.position ?? "object-center"}`}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
